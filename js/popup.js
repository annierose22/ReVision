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

      chrome.tabs.executeScript({
        code: 'document.body.style.fontFamily = "' + font + '"'
      });

      return false;
    });

    // links font to selectbutton
    $("#presetColors").submit(function() {
      var background = $("#colorselect").val();

      chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor = "' + background + '"'
      });
      var background;
      if ($("#colorselect").val() == "#FDFFFD")
        {
          var text = "#335";
        }
      if ($("#colorselect").val() == "#FFF")
        {
          var text = "#000";
        }
      if ($("#colorselect").val() == "#FFFFFE")
        {
          var text = "#369";
        }
      if ($("#colorselect").val() == "#FFFEFF")
        {
          var text = "#639";
        }
      if ($("#colorselect").val() == "#FFFFF1")
        {
          var text = "#000";
        }
      if ($("#colorselect").val() == "#FFFFF2")
        {
          var text = "#369";
        }
      if ($("#colorselect").val() == "#FFC")
        {
          var text = "#000";
        }
      if ($("#colorselect").val() == "#FFFFCD")
        {
          var text = "#369";
        }
      if ($("#colorselect").val() == "#9CF")
        {
          var text = "#000";
        }
      if ($("#colorselect").val() == "#0CD")
        {
          var text = "#000";
        }
      if ($("#colorselect").val() == "#99C")
        {
          var text = "#000";
        }
      if ($("#colorselect").val() == "#9C6")
        {
          var text = "#000";
        }
      if ($("#colorselect").val() == "#9FC")
        {
          var text = "#000";
        }
      if ($("#colorselect").val() == "#FD8")
        {
          var text = "#631";
        }
      if ($("#colorselect").val() == "#E90")
        {
          var text = "#631";
        }
      if ($("#colorselect").val() == "#000")
        {
          var text = "#CCC";
        }
      if ($("#colorselect").val() == "#212121")
        {
          var text = "#D0FFD0";
        }
      if ($("#colorselect").val() == "#000001")
        {
          var text = "#CC9";
        }
      if ($("#colorselect").val() == "#006")
        {
          var text = "#F5F5F5";
        }
      if ($("#colorselect").val() == "#00C")
        {
          var text = "#FFF";
        }
      if ($("#colorselect").val() == "#303")
        {
          var text = "#FFF";
        }
      if ($("#colorselect").val() == "#590")
        {
          var text = "#000";
        }
      if ($("#colorselect").val() == "#999")
        {
          var text = "#FFF";
        }
      if ($("#colorselect").val() == "#C69")
        {
          var text = "#FFF";
        }
      chrome.tabs.executeScript({
          code: 'document.body.style.color = "' + text + '"'
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

      chrome.tabs.executeScript({
        code: 'document.body.style.fontSize = "' + size + '"'
      });

      return false;
    });

};
