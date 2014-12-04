// pop-up has one button -when user clicks it, sends message to background script 
window.onload = function() {
    document.getElementById("button").onclick = function() {
        chrome.extension.sendMessage({
            type: "color-divs"
        });
    }
}
