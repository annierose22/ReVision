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

    // links font to selectbutton
    $("#presetColors").submit(function() {
      var combo = $("#colorselect").val();

      chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor = "' + combo + '"'
      });
      return false;
    });

    // second color slider for background
    $('#pickerback').colpick({
      flat:true,
      layout:'hex',
      submit:0,
      colorScheme:'dark',

      // links the background to the color graph
      onChange:function(hsb,hex,rgb,el,bySetColor) {
        chrome.tabs.executeScript({
          code: 'document.body.style.backgroundColor = "#' + hex + '"'
        });
      }
    }).keyup(function(){
      $(this).colpickSetColor(this.value);
    });

    $("#fontSize").submit(function() {
      var size = $("#sizeselect").val();

      // document.getElementsByTagName("p");
      /*slect p tag and iterate over it
      element.style.fontFamily = "' + font + '"*/

      chrome.tabs.executeScript({
        code: 'document.body.style.fontSize = "' + size + '"'
      });

      return false;
    });
};
