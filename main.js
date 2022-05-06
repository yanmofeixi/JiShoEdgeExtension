chrome.contextMenus.create({
    title: 'Search in Jisho.org',
    contexts: ['selection'],
    onclick: function (params) {
        chrome.tabs.create({ url: 'https://jisho.org/search/' + params.selectionText });
    }
});