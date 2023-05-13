function updateOutput() {
    var output = document.getElementById("output");
    var html = editor.getValue();
    var css = editorCSS.getValue();

    // Create a new div element for the HTML
    var divHtml = document.createElement('div');
    divHtml = html.split('\n');

    editorC = document.getElementById("editorCSS-parent")
    var checkboxes = editorC.getElementsByClassName("cm-line-checkbox");

    // Create a new style element for the CSS
    var style = document.createElement('style');
    var lines = css.split('\n');
    for (var i = 0; i < lines.length; i++) {
        var hasCheckedCheckboxC = checkboxes[i] ? checkboxes[i].checked : false;
        var line = lines[i];
        if (/[\.\*#@\w].*.[{]/gm.test(line)) {
            lines[i] = '#outputIn > ' + line;
        }
        if (!hasCheckedCheckboxC) {
            style.innerHTML += lines[i]
        }
    }
    css = lines.join('\n');
    // style.innerHTML = css;
    output.innerHTML = "";
    output.appendChild(style);

    // Get all the checkboxes
    var checkboxesByEditor = {};
    editorH = document.getElementById("editor-parent")
    var checkboxes = editorH.getElementsByClassName("cm-line-checkbox");
    var outputHTML = ""
    // Add each line of HTML to the output
    var divLine = document.createElement('body');
    divLine.setAttribute("id", "outputIn");
    var htmlLines = divHtml;
    console.log(htmlLines)
    for (var i = 0; i < htmlLines.length; i++) {
        var line = htmlLines[i];
        var hasCheckedCheckbox = checkboxes[i] ? checkboxes[i].checked : false;
        if (!hasCheckedCheckbox) {
            console.log(line)
            outputHTML += line;
        }
        divLine.innerHTML = outputHTML
    } console.log("divline", outputHTML)
    output.appendChild(divLine);
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("cm-line-checkbox")) {
        updateOutput();
    }
});
