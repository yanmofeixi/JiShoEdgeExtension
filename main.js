
chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        title: 'A: ',
        type: 'normal',
        id: 'As',
        contexts: ['all']
    });
});