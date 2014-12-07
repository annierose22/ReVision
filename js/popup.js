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
      var back = $("#colorselect").val();

      chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor = "' + back + '"'
      });
      var background;
      if ($("#colorselect").val() == "#FDFFFD")
        {
          var background = "#335";
        }
      if ($("#colorselect").val() == "#FFF")
        {
          var background = "#000";
        }
      if ($("#colorselect").val() == "#FFFFFE")
        {
          var background = "#369";
        }
      if ($("#colorselect").val() == "#FFFEFF")
        {
          var background = "#639";
        }
      if ($("#colorselect").val() == "#FFFFF1")
        {
          var background = "#000";
        }
      if ($("#colorselect").val() == "#FFFFF2")
        {
          var background = "#369";
        }
      if ($("#colorselect").val() == "#FFC")
        {
          var background = "#000";
        }
      if ($("#colorselect").val() == "#FFFFCD")
        {
          var background = "#369";
        }
      if ($("#colorselect").val() == "#9CF")
        {
          var background = "#000";
        }
      if ($("#colorselect").val() == "#0CD")
        {
          var background = "#000";
        }
      if ($("#colorselect").val() == "#99C")
        {
          var background = "#000";
        }
      if ($("#colorselect").val() == "#9C6")
        {
          var background = "#000";
        }
      if ($("#colorselect").val() == "#9FC")
        {
          var background = "#000";
        }
      if ($("#colorselect").val() == "#FD8")
        {
          var background = "#631";
        }
      if ($("#colorselect").val() == "#E90")
        {
          var background = "#631";
        }
      if ($("#colorselect").val() == "#000")
        {
          var background = "#CCC";
        }
      if ($("#colorselect").val() == "#212121")
        {
          var background = "#D0FFD0";
        }
      if ($("#colorselect").val() == "#000001")
        {
          var background = "#CC9";
        }
      if ($("#colorselect").val() == "#006")
        {
          var background = "#F5F5F5";
        }
      if ($("#colorselect").val() == "#00C")
        {
          var background = "#FFF";
        }
      if ($("#colorselect").val() == "#303")
        {
          var background = "#FFF";
        }
      if ($("#colorselect").val() == "#590")
        {
          var background = "#000";
        }
      if ($("#colorselect").val() == "#999")
        {
          var background = "#FFF";
        }
      if ($("#colorselect").val() == "#C69")
        {
          var background = "#FFF";
        }
      chrome.tabs.executeScript({
          code: 'document.body.style.color = "' + background + '"'
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
