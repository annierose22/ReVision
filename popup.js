/*
// Sets the html document to be opened as a popup when the user clicks on the browser action's icon
chrome.browserAction.setPopup(object details) // add object details lol

// actually gets the html document set as the popup for this browser action.
// not sure if this should be in this file? think so though
chrome.browserAction.getPopup(object details, function callback)

chrome.browserAction.setIcon(object details, function callback)

*/
// pop-up has one button -when user clicks it, sends message to background script
window.onload = function() {
    document.getElementById("button").onclick = function() {
        chrome.extension.sendMessage({
            type: "color-divs"
        });
    };

    $('#picker').colpick({
    	layout:'hex',
    	submit:0,
    	colorScheme:'dark',
    	onChange:function(hsb,hex,rgb,el,bySetColor) {
    		$(el).css('border-color','#'+hex);
    		// Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
    		if(!bySetColor) $(el).val(hex);
    	}
    }).keyup(function(){
    	$(this).colpickSetColor(this.value);
    });
