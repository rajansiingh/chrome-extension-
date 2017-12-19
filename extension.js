//This page create binds your extension UI with events.

var app = {

    init: function () {
        var $clearBtn = document.getElementById('clearBtn');
        var $inputBtn = document.getElementById('inputBtn');

        chrome.runtime.sendMessage({ fn: "getText" }, function (response) {
            $inputBtn.value = response;
        });

        $inputBtn.addEventListener('input', function () {
            chrome.runtime.sendMessage({ fn: "setText", text: this.value });
        });

        $clearBtn.addEventListener("click", function () {
            $inputBtn.value = "";
            chrome.runtime.sendMessage({ fn: "setText", text: "" });
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    app.init();
});