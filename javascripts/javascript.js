window.addEventListener('load', function () {
document.getElementById('run-code').addEventListener('click', function() {
    var code = editorJS.getValue(); // Get the JavaScript code from the editor
    try {
      eval(code); // Execute the code
    } catch (error) {
      console.error(error); // Log any errors to the console
    }
  });
})