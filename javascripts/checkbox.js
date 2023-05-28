function checkCheckbox(editorName) {
    var checked = [];
    var editor = document.getElementById(editorName);
    var checkboxes = editor.getElementsByClassName("cm-line-checkbox");
    console.log(checkboxes);
  
    for (var i = 0; i < checkboxes.length; i++) {
      console.log(checkboxes[i].checked);
      if (isChecked(checkboxes[i])) {
        console.log(checkboxes[i].value)
        checked.push(checkboxes[i].value);
      }
    }
  
    return checked;
  }
  
  function isChecked(checkbox) {
    return checkbox.checked || checkbox.getAttribute("checked") !== null;
  }
  