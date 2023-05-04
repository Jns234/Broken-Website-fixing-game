window.onload = function () {
    editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
        lineNumbers: true,
        theme: "default",
        mode: "javascript"
    });
    editorCSS = CodeMirror.fromTextArea(document.getElementById("editorCSS"), {
        lineNumbers: true,
        theme: "default",
        mode: "css"
    });
    editor.setValue(currentWebpageCode);
    editorCSS.setValue(currentWebpageStyle);

    updateOutput()
    editor.on('change', updateOutput);
    editorCSS.on('change', updateOutput);

    
};
const re = new RegExp("[\.#@].*.[{]");

currentWebpageCode = `<div>hello there</div>
  `;
currentWebpageStyle = `* {
    color: blue;
}
.div {
    backgroundColor : red;
}
  `;
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
      if (/[\.\*#@].*.[{]/gm.test(line)) {
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




const text = `@media (min-width: 600px) {
    #whats-new .featured .featured-image {
      margin-bottom: 0;
      width: 50%;
    }
  }
  
  @media (min-width: 800px) {
    #whats-new .featured .featured-image {
      height: 200px;
      margin-bottom: 0.5rem;
      width: 100%;
    }
  }`;

const regex = /[\.#@].*.[{]/gm;
const modifiedText = text.replace(regex, match => `#output > ${match}`);

console.log(modifiedText);
