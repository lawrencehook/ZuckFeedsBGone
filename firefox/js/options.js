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

// Make checkboxes reflect local settings
document.addEventListener("DOMContentLoaded", () => {
  browser.storage.local.get(localSettings => {
    Object.keys(localSettings).forEach(settingKey => {
      document.getElementById(settingKey).checked = localSettings[settingKey];
    });
  });
});

// Handle check/uncheck events
Object.keys(DEFAULT_SETTINGS).forEach(settingKey => {
  const settingCheckbox = document.getElementById(settingKey);
  settingCheckbox.addEventListener("change", async e => {
    const settingKey = e.target.id;
    const settingValue = e.target.checked;

    // 1. Save changes to local storage
    const saveObj = { [settingKey]: settingValue };
    browser.storage.local.set(saveObj);
    
    // 2. Update running tabs with the changed setting
    const messageObj = { key: settingKey, value: settingValue };
    const tabs = await browser.tabs.query({});
    tabs.forEach(tab => {
      browser.tabs.sendMessage(tab.id, messageObj);
    });
  });
});
