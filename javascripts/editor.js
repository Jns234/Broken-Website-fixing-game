window.onload = function () {
  // const editorBtn = document.getElementById('editor-btn');
  // const editorCSSBtn = document.getElementById('editorCSS-btn');
  // const editorJSBtn = document.getElementById('editorJS-btn');
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
  editorJS.on('change', updateOutput, runCode());
  // editorLoad()
  // editorSelector()
  // editorBtn.addEventListener('click', () => {
  //   editor.refresh();
  // });

  // // show editorCSS and hide editor when editorCSS button is pressed
  // editorCSSBtn.addEventListener('click', () => {
  //   editorCSS.refresh();
  // });

  // editorJSBtn.addEventListener('click', () => {
  //   editorJS.refresh();
  // });
  editor.setValue(indexHTML);
  editorCSS.setValue(indexCSS);
  editorJS.setValue(indexJS)

};

indexHTML = `<div>hello there</div>
<button id="gif">this should be a gif</button>
<div id="box" style="display: flex;">
<input type="checkbox" id="myCheckbox"> 
<p id="someText">Some text here</p>
</div>
<img id="img" src="https://motionarray.imgix.net/preview-292305-SKZWKoY5Wm-high_0006.jpg?w=660&q=60&fit=max&auto=format">
<div class="container">
<p>this the first text</p>
<p>This text should right to the first text</p>
</div>

<button id="tabButton1" class="tab-button active">Tab 1</button>
  <button id="tabButton2" class="tab-button">Tab 2</button>
  <button id="tabButton3" class="tab-button">Tab 3</button>

  <div id="tabPane1" class="tab-pane">This is the first tab</div>
  <div id="tabPane2" class="tab-pane">This is the second tab</div>
  <div id="tabPane3" class="tab-pane">This is the third tab</div>
`


indexCSS = `* {
  color: blue;
}
div {
  background-color : red;
}
label {
  display: block;
}
.strikethrough {
  text-decoration: line-through;
}
* {
  display: none !important;
  max-width: 100% !important
}
.container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.tab-button {
  padding: 10px;
  margin-right: 5px;
  background-color: #f2f2f2;
  border: none;
  cursor: pointer;
}
.tab-button.active {
  background-color: #ccc;
}
.tab-pane {
  display: none;
  padding: 20px;
  border: 1px solid #ccc;
}
.tab-pane.active {
  display: block;
}
`
indexJS = `var gif = output.querySelector("#gif");
gif.addEventListener("click", function () {
    console.log("Clicked on the gif");
});
const checkbox = document.getElementById('myCheckbox');
const text = checkbox.parentNode;

checkbox.addEventListener('change', function() {
  if (this.checked) {
    text.classList.add('strikethrough');
  } else {
    text.classList.remove('strikethrough');
  }
});

var tabButtons = document.querySelectorAll('.tab-button');
var tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var targetPaneId = this.id.replace('tabButton', 'tabPane');

    tabButtons.forEach(function(button) {
      button.classList.remove('active');
      pane.classList.remove('active');
    });

    tabPanes.forEach(function(pane) {
      pane.classList.remove('active');
    });

    this.classList.add('active');
    document.getElementById(targetPaneId).classList.add('active');
  });
});
`