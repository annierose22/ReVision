/*
// Sets the html document to be opened as a popup when the user clicks on the browser action's icon
*/
window.onload = function() {

// declares first color picker for font
    $('#picker').colpick({
      flat:true,
    	layout:'hex',
    	submit:0,
    	colorScheme:'dark',
    	onChange:function(hsb,hex,rgb,el,bySetColor) {
        // links font to color graph
        chrome.tabs.executeScript({
          code: 'document.body.style.color = "#' + hex + '"'
        });
    	}
    }).keyup(function(){
    	$(this).colpickSetColor(this.value);
    });
    // links font to selectbutton
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

// second color slider for background
    $('#pickerback').colpick({
      flat:true,
      layout:'hex',
      submit:0,
      colorScheme:'dark',
      // links the background to the color graph- THIS DOESNT WORK_ STILL LINKS TO FONT
      onChange:function(hsb,hex,rgb,el,bySetColor) {
        chrome.tabs.executeScript({
          code: 'document.body.style.font; = "#' + hex + '"'
        });
      }
    }).keyup(function(){
      $(this).colpickSetColor(this.value);
    });

// links the background to the color graph- THIS DOESNT WORK_ STILL LINKS TO FONT
};
