function updateOutput() {
    var output = document.getElementById("output");
    var html = editor.getValue();
    var css = editorCSS.getValue();
  
    // Create a new div element for the HTML
    var divHtml = document.createElement('div');
    divHtml.innerHTML = html;
  
    // Create a new style element for the CSS
    var style = document.createElement('style');
    var lines = css.split('\n');
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/[\.\*#@\w].*.[{]/gm.test(line)) {
        lines[i] = '#outputIn > ' + line;
      }
    }
    css = lines.join('\n');
    style.innerHTML = css;
    output.innerHTML = "";
    output.appendChild(style);
  
    // Get all the checkboxes
    var checkboxesByEditor = {};
    editorH = document.getElementById("editor-parent")
    var checkboxes = editorH.getElementsByClassName("cm-line-checkbox");
  
    // Add each line of HTML to the output
    var divLine = document.createElement('body');
    divLine.setAttribute("id", "outputIn");
    var htmlLines = divHtml.children;
    console.log(divHtml.children)
    for (var i = 0; i < htmlLines.length; i++) {
      var line = htmlLines[i];
      var hasCheckedCheckbox = checkboxes[i] ? checkboxes[i].checked : false;
      if (!hasCheckedCheckbox) {
        divLine.innerHTML += line.outerHTML;
    }
    output.appendChild(divLine);
    }
  }
  
  document.addEventListener("click", function(event) {
    if (event.target.classList.contains("cm-line-checkbox")) {
      updateOutput();
    }
  });
  