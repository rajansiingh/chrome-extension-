// This JS runs on every tab which user opens in their chrome browser.

var browserdom = {
    init: function () {
        console.log('email extension initialised');
        var $emailBtn = document.querySelector('[type="email"]') || document.getElementById('email') || document.getElementById('login_username') || document.querySelector('[name="email"]') || document.querySelector('[name="login_username"]');
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            if ($emailBtn) {
                $emailBtn.value = request.msg;
            }
        });
    }

}
document.addEventListener("DOMContentLoaded", function () {
    browserdom.init();
});