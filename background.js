function onTabUpdate(tabID, changeInfo, tabInfo) {
  if (changeInfo.url == null) { return; }

  const url = new URL(changeInfo.url);
  let id = url.pathname;
  if (!id.startsWith('/shorts/')) { return; }
  id = id.substring(8); // 8 === '/shorts/'.length

  browser.tabs.update(tabID, {url: `${url.protocol}//${url.hostname}/watch?v=${id}`});
}

async function main() {
  browser.tabs.onUpdated.addListener(onTabUpdate);
}

main();