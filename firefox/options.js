const facebookCheckbox = document.getElementById('facebook');
const instagramCheckbox = document.getElementById('instagram');
facebookCheckbox.addEventListener("change", saveFacebookSetting);
instagramCheckbox.addEventListener("change", saveInstagramSetting);

document.addEventListener("DOMContentLoaded", restoreOptions);

function saveFacebookSetting(e) {
	browser.storage.local.set({ facebook: e.target.checked });
}

function saveInstagramSetting(e) {
	browser.storage.local.set({ instagram: e.target.checked });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    for (let key in result) {
      document.getElementById(key).checked = result[key];
    }
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  const settings = [
    "facebook",
    "instagram"
  ];
  settings.forEach(setting => {
    browser.storage.local.
      get(setting).
      then(setCurrentChoice, onError);
  });
}
