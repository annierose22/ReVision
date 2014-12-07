// selects all divs on the current page, and changes their background color.
// attached the listener to chrome.extension.onMessage 
chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    switch(message.type) {
        case "colors-div":
            var divs = document.querySelectorAll("div");
            if(divs.length === 0) {
                alert("There are no divs in the page.");
            } else {
                for(var i=0; i&lt;divs.length; i++) {
                    divs[i].style.backgroundColor = message.color;
                }
            }
        break;
    }
});
