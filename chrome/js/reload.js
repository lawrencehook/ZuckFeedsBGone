const reloadButton = document.getElementById("reload_button");

reloadButton.addEventListener("click", async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
	  tabs.forEach(tab => chrome.tabs.reload(tab.id));
  });
});
