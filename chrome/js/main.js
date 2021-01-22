const HTML = document.documentElement;
const DEFAULT_SETTINGS = {
  "remove_facebook_stories": true,
  "remove_facebook_rooms": true,
  "remove_facebook_newsfeed": true,
  "remove_facebook_top_middle_bar": true,
  "remove_facebook_left_bar": true,
  "remove_instagram_explore": true,
  "remove_instagram_stories": true,
  "remove_instagram_suggestions": true
}

try {
  chrome.storage.local.get(localSettings => {
    Object.keys(DEFAULT_SETTINGS).forEach(settingKey => {
      const isLocal = localSettings.hasOwnProperty(settingKey);
      const settingValue = isLocal ? localSettings[settingKey] : DEFAULT_SETTINGS[settingKey];
      if (!isLocal) chrome.storage.local.set({ [settingKey] : settingValue });
      HTML.setAttribute(settingKey, settingValue);
    });
  });
} catch (e) {
  console.log(e);
}

// Update in real time, by receiving change events from the options menu
chrome.runtime.onMessage.addListener((data, sender) => {
  const settingKey = data.key;
  const settingValue = data.value;
  HTML.setAttribute(settingKey, settingValue);
});
