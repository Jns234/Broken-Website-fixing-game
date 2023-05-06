function editorLoad () {
    const editor = document.getElementById('editor-parent');
    const editorCSS = document.getElementById('editorCSS-parent');
    editor.style.display = 'block';
    editorCSS.style.display = 'none';
    // editorCSS.style.display = 'none';
}
function editorSelector () {
    const editorBtn = document.getElementById('editor-btn');
    const editorCSSBtn = document.getElementById('editorCSS-btn');
    const editor = document.getElementById('editor-parent');
    const editorCSS = document.getElementById('editorCSS-parent');
    // show editor and hide editorCSS when editor button is pressed
    editorBtn.addEventListener('click', () => {
      editor.style.display = 'block';
      editorCSS.style.display = 'none';
    });
  
    // show editorCSS and hide editor when editorCSS button is pressed
    editorCSSBtn.addEventListener('click', () => {
      editor.style.display = 'none';
      editorCSS.style.display = 'block';
    });
  };

