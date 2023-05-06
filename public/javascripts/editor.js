window.onload = function () {
  const editorBtn = document.getElementById('editor-btn');
  const editorCSSBtn = document.getElementById('editorCSS-btn');
  const editorJSBtn = document.getElementById('editorJS-btn');
  editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
      lineNumbers: true,
      theme: "default",
      mode: "html"
  });
  editorCSS = CodeMirror.fromTextArea(document.getElementById("editorCSS"), {
      lineNumbers: true,
      theme: "default",
      mode: "css"
  });
  editorJS = CodeMirror.fromTextArea(document.getElementById("editorJS"), {
    lineNumbers: true,
    theme: "default",
    mode: "javascript"
});

  // Use the readFile function to get the file contents and assign them to the editor values
  readFile("../webpage/index.html")
    .then(fileContents => {
      editor.setValue(fileContents);
    })
    .catch(error => {
      console.error('Error:', error);
    });

    readFile("../webpage/style.css")
    .then(fileContents => {
      editorCSS.setValue(fileContents);
    })
    readFile("../webpage/index.js")
    .then(fileContents => {
      editorJS.setValue(fileContents);
    })
    .catch(error => {
      console.error('Error:', error);
    });

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
};
