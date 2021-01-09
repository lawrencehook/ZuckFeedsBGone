const reloadButton = document.getElementById("reload_button");

reloadButton.addEventListener("click", async () => {
  const tabs = await browser.tabs.query({ active: true, currentWindow: true });
  tabs.forEach(tab => browser.tabs.reload(tab.id));
});
