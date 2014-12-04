

// listening for an event/one-time requests-
// can we use this to listen for clicks on the icon?
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "  ":
            name();
        break;
    }
    return true;
});
