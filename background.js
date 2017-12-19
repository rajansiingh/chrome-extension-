//This runs in the background of chrome V8.
// "persistent": false  is set in manifest jSON so that background JS runs only when your extension is activated
var background = {
    bgTxt: "",
    init: function () {

        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            if (request.fn in background) {
                background[request.fn](request, sender, sendResponse);
            }
        });
    },

    setText: function (request, sender, sendResponse) {
        this.bgTxt = request.text;
        this.sendTexttoBrowser(this.bgTxt);
    },
    getText: function (request, sender, sendResponse) {
        sendResponse(this.bgTxt);
    },
    sendTexttoBrowser: function (emailText) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { msg: emailText }, function (response) {

            });
        });
    }

}

background.init();