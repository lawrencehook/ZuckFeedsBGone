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
      ".rq0escxv.l9j0dhe7.du4w35lb.j83agx80.g5gj957u.pmt1y7k9.buofh1pr.hpfvmrgz.taijpn5t.gs1a9yip.owycx6da.btwxx1t3.f7vcsfb0.fjf4s8hc.b6rwyo50.oyrvap6t"
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
      ".mJ2Qv._2Z_Zl.YrkqH"
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
