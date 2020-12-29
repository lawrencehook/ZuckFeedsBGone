try {
  const gettingFacebook = browser.storage.local.get("facebook");
  gettingFacebook.then(onGotFacebookSetting, onError);

  const gettingInstagram = browser.storage.local.get("instagram");
  gettingInstagram.then(onGotInstagramSetting, onError);
} catch (e) {
  console.log(e);
}


/***********
 * Facebook
 ***********/
function onGotFacebookSetting(result) {
  const facebook = result.facebook === undefined ? true : result.facebook;
  browser.storage.local.set({ facebook });

  if (facebook) {
    removeSelectors([
    ]);
  }
}

/************
 * Instagram
 ************/
function onGotInstagramSetting(result) {
  const instagram = result.instagram === undefined ? true : result.instagram;
  browser.storage.local.set({ instagram });
  if (instagram) {
    removeSelectors([
      
    ]);
  }
}

function removeSelectors(selectors) {
  const cssSheet = document.styleSheets.length > 0 && document.styleSheets[0];
  const displayNoneRule = " { display: none !important; }";
  const compoundSelector = selectors.join(", ");
  cssSheet && cssSheet.insertRule(compoundSelector + displayNoneRule);
}

function onError(error) {
  console.log(`Error: ${error}`);
}
