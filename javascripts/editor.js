window.onload = function () {
  const editorBtn = document.getElementById('editor-btn');
  const editorCSSBtn = document.getElementById('editorCSS-btn');
  const editorJSBtn = document.getElementById('editorJS-btn');
  editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
      lineNumbers: true,
      theme: "material",
      mode: "htmlmixed"
  });
  editorCSS = CodeMirror.fromTextArea(document.getElementById("editorCSS"), {
      lineNumbers: true,
      theme: "material",
      mode: "css"
  });
  editorJS = CodeMirror.fromTextArea(document.getElementById("editorJS"), {
    lineNumbers: true,
    theme: "material",
    mode: "javascript"
});

  // Use the readFile function to get the file contents and assign them to the editor values
  // readFile("./webpage/index.txt")
  //   .then(fileContents => {
  //     editor.setValue(fileContents);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });

  //   readFile("../webpage/style.css")
  //   .then(fileContents => {
  //     editorCSS.setValue(fileContents);
  //   })
  //   readFile("../webpage/index.js")
  //   .then(fileContents => {
  //     editorJS.setValue(fileContents);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });

  updateOutput()
  editor.on('change', updateOutput);
  editorCSS.on('change', updateOutput);
  editorJS.on('change', updateOutput);
  editorLoad()
  editorSelector()
  editorBtn.addEventListener('click', () => {
    editor.refresh();
  });

  // show editorCSS and hide editor when editorCSS button is pressed
  editorCSSBtn.addEventListener('click', () => {
    editorCSS.refresh();
  });

  editorJSBtn.addEventListener('click', () => {
    editorJS.refresh();
  });
  editor.setValue(indexHTML);
  editorCSS.setValue(indexCSS);
  editorJS.setValue(indexJS)

};

indexHTML = `<div>hello there</div>
<button id="gif">this should be a gif</button>`;

indexCSS = `* {
  color: blue;
}
div {
  background-color : red;
}
`
indexJS = `var gif = output.querySelector("#gif");
gif.addEventListener("click", function () {
    console.log("Clicked on the gif");
});
`