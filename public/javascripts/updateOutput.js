function updateOutput() {
    var output = document.getElementById("output");
    var html = editor.getValue();
    var css = editorCSS.getValue();
    
    // Create a new div element for the HTML
    var div = document.createElement('div');
    div.innerHTML = html;
    
    // Create a new style element for the CSS
    var style = document.createElement('style');
    var lines = css.split('\n');
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/[\.\*#@\w].*.[{]/gm.test(line)) {
        lines[i] = '#output > ' + line;
      }
    }
    css = lines.join('\n');
    style.innerHTML = css;
    console.log(style.innerHTML)
    div.appendChild(style);
    
    // Set the output element's innerHTML to the HTML from the editor, including the style element
    output.innerHTML = div.innerHTML;
    }