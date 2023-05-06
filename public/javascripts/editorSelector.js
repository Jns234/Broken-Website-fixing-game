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
    // show editor and hide editorCSS when editor button is pressed
    editorBtn.addEventListener('click', () => {
        editor.style.display = 'block';
        editorCSS.style.display = 'none';
        editorJS.style.display = 'none';

    });

    // show editorCSS and hide editor when editorCSS button is pressed
    editorCSSBtn.addEventListener('click', () => {
        editor.style.display = 'none';
        editorCSS.style.display = 'block';
        editorJS.style.display = 'none';

    });
    editorJSBtn.addEventListener('click', () => {
        editor.style.display = 'none';
        editorCSS.style.display = 'none';
        editorJS.style.display = 'block';
    });
};

