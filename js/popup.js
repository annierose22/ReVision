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
    // document.getElementById("button").onclick = function() {
    //     chrome.extension.sendMessage({
    //         type: "color-divs"
    //     });
    // };

    $('#picker').colpick({
      flat:true,
    	layout:'hex',
    	submit:0,
    	colorScheme:'dark',
    	onChange:function(hsb,hex,rgb,el,bySetColor) {
    		chrome.tabs.executeScript({
          code: 'document.body.style.color = "#' + hex + '"'
        });
    	}
    }).keyup(function(){
    	$(this).colpickSetColor(this.value);
    });

    $('#pickerback').colpick({
      flat:true,
      layout:'hex',
      submit:0,
      colorScheme:'dark',
      onChange:function(hsb,hex,rgb,el,bySetColor) {
        chrome.tabs.executeScript({
          code: 'document.body.style.color = "#' + hex + '"'
        });
      }
    }).keyup(function(){
      $(this).colpickSetColor(this.value);
    });

    $("#fontForm").submit(function() {
      var font = $("#fontselect").val();

      // document.getElementsByTagName("p");
      /*slect p tag and iterate over it
      element.style.fontFamily = "' + font + '"*/

      chrome.tabs.executeScript({
        code: 'document.body.style.fontFamily = "' + font + '"'
      });

      return false;
    });
};
