function checkCheckbox(editorName) {
    checked = []
    var editor = document.getElementById(editorName);
    var checkboxes = editor.getElementsByClassName("cm-line-checkbox");
        for ( var i=0; i < checkboxes.length; i++){
            if (checkboxes[i].checked = true) {
                checked.push(i)
            }
        }
    return checked
}