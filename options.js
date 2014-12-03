// Save options to chrome.storage
function save_options() {
// figure out how to apply this to the preset colors and sliders?
  var color = document.getElementById('color').value;
  var backgroundColor = document.getElementById('    ').checked;
  chrome.storage.sync.set({
    Color: color,
    
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}
