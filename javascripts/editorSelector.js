function editorLoad() {
    const editor = document.getElementById('editor-parent');
    const editorCSS = document.getElementById('editorCSS-parent');
    const editorJS = document.getElementById('editorJS-parent');
    editor.style.display = 'block';
    editorCSS.style.display = 'none';
    editorJS.style.display = 'none';
    // editorCSS.style.display = 'none';
}
function editorSelector() {
    const editorBtn = document.getElementById('editor-btn');
    const editorCSSBtn = document.getElementById('editorCSS-btn');
    const editorJSBtn = document.getElementById('editorJS-btn');
    const editor = document.getElementById('editor-parent');
    const editorCSS = document.getElementById('editorCSS-parent');
    const editorJS = document.getElementById('editorJS-parent');
  
    // store the checked state of the checkboxes
    editorH = document.getElementById("editor-parent")
    var hChecked = editorH.getElementsByClassName("cm-line-checkbox");
    
    editorC = document.getElementById("editorCSS-parent")
    var cssChecked = editorC.getElementsByClassName("cm-line-checkbox");

    editorJ = document.getElementById("editorJS-parent")
    var jsChecked = editorJ.getElementsByClassName("cm-line-checkbox");

    // let cssChecked = document.getElementById('css-checkbox').checked;
    // let jsChecked = document.getElementById('js-checkbox').checked;
  
    editorBtn.addEventListener('click', () => {
      editor.style.display = 'block';
      editorCSS.style.display = 'none';
      editorJS.style.display = 'none';
  
      editorBtn.style.backgroundColor = '#ADD8E6';
      editorCSSBtn.style.backgroundColor = 'white';
      editorJSBtn.style.backgroundColor = 'white';
  
      // set the checked state of the checkboxes
      editorH.getElementsByClassName("cm-line-checkbox").checked = true;
      console.log(editorH.getElementsByClassName("cm-line-checkbox").checked)
      editorC.getElementsByClassName("cm-line-checkbox").checked = cssChecked;
      editorJ.getElementsByClassName("cm-line-checkbox").checked = jsChecked;
      console.log(checkCheckbox('editor-parent'))
    //   document.getElementById('js-checkbox').checked = jsChecked;
    });
  
    editorCSSBtn.addEventListener('click', () => {
      editor.style.display = 'none';
      editorCSS.style.display = 'block';
      editorJS.style.display = 'none';
  
      editorBtn.style.backgroundColor = 'white';
      editorCSSBtn.style.backgroundColor = '#ADD8E6';
      editorJSBtn.style.backgroundColor = 'white';
  
      // set the checked state of the checkboxes
      editorC.getElementsByClassName("cm-line-checkbox").checked = true;
      editorJ.getElementsByClassName("cm-line-checkbox").checked = jsChecked;
      editorH.getElementsByClassName("cm-line-checkbox").checked = hChecked;
      console.log(checkCheckbox('editorCSS-parent'))

    });
  
    editorJSBtn.addEventListener('click', () => {
      editor.style.display = 'none';
      editorCSS.style.display = 'none';
      editorJS.style.display = 'block';
  
      editorBtn.style.backgroundColor = 'white';
      editorCSSBtn.style.backgroundColor = 'white';
      editorJSBtn.style.backgroundColor = '#ADD8E6';
  
      // set the checked state of the checkboxes
      editorC.getElementsByClassName("cm-line-checkbox").checked = cssChecked;
      editorJ.getElementsByClassName("cm-line-checkbox").checked = true;
      editorH.getElementsByClassName("cm-line-checkbox").checked = hChecked;
      
    });
  };
  