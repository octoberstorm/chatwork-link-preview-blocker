chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: ["*://linkpreview.chatwork.com/*"]
    },
    ["blocking"]
);