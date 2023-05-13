window.addEventListener('load', function () {
//   editorJ = document.getElementById("editorJS-parent")
//   var checkboxes = editorJ.getElementsByClassName("cm-line-checkbox");
// document.getElementById('run-code').addEventListener('click', function() {
//     finalCode = ""
//     var code = editorJS.getValue(); // Get the JavaScript code from the editor
//     codeLines = code.split('\n')
//     for (var i = 0; i < codeLines.length; i++) {
//       var hasCheckedCheckboxJ = checkboxes[i] ? checkboxes[i].checked : false;
//       if (!hasCheckedCheckboxJ) {
//           finalCode += codeLines[i]
//       }
//   }
//     try {
//       eval(finalCode); // Execute the code
//     } catch (error) {
//       console.error(error); // Log any errors to the console
//     }
//   });
// var editorJS = document.getElementById('editorJS-parent').querySelector('.CodeMirror-scroll');
// editorJS.addEventListener('click', handleCheckboxClick);
  runCode()
})

function runCode() {
  editorJ = document.getElementById("editorJS-parent")
  var checkboxes = editorJ.getElementsByClassName("cm-line-checkbox");
    finalCode = ""
    var code = editorJS.getValue(); // Get the JavaScript code from the editor
    codeLines = code.split('\n')
    for (var i = 0; i < codeLines.length; i++) {
      var hasCheckedCheckboxJ = checkboxes[i] ? checkboxes[i].checked : false;
      if (!hasCheckedCheckboxJ) {
          finalCode += codeLines[i]
      }
  }
    try {
      eval(finalCode); // Execute the code
    } catch (error) {
      console.error(error); // Log any errors to the console
    }
}

function handleCheckboxClick(event) {
  // Check if the clicked element is a checkbox
  if (event.target.type === 'checkbox' && event.target.parentNode.className === 'CodeMirror-line') {
    console.log("clicked")
    // Call the runCode function
    runCode();
  }
}

// Add event listener to editorJS-parent
