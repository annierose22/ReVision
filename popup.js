
// Sets the html document to be opened as a popup when the user clicks on the browser action's icon
chrome.browserAction.setPopup(object details) // add object details lol

// actually gets the html document set as the popup for this browser action.
// not sure if this should be in this file? think so though
chrome.browserAction.getPopup(object details, function callback)

// pop-up has one button -when user clicks it, sends message to background script
window.onload = function() {
    document.getElementById("button").onclick = function() {
        chrome.extension.sendMessage({
            type: "color-divs"
        });
    }
}
