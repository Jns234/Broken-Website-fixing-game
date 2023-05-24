function toggleForm() {
    var buttonsContainer = document.getElementById("buttons");
    var taskContainer = document.getElementById("task");
    var formButton = document.getElementById("checkTask");
    var formContainer = document.getElementById("formContainer");
    
    var computedStyle = window.getComputedStyle(formContainer);
    var display = computedStyle.getPropertyValue("display");
  
  
    if (display === "none") {
      formContainer.style.display = "block";
      formButton.style.display = "none";
      taskContainer.style.width = "40%";
      buttonsContainer.style.width = "60%";
    } else {
      formContainer.style.display = "none";
      formButton.style.display = "block";
      taskContainer.style.width = "80%";
      buttonsContainer.style.width = "20%";
    }
  }
  

  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting and page reload
    const currentTask = tasks[currentTaskIndex];
    // Access the form fields
    const rowField = document.getElementById("row");
    const whyField = document.querySelector('input[name="why"]:checked');
  
    // Get the values from the form fields
    const row = rowField.value;
    const why = whyField.value;
    
    selectedRow = rowField.value
    selectedOption = whyField.value;
    // Do something with the form data
    console.log("row: " + row);
    console.log("why: " + why);
    
    checkOptionTask(currentTask)

    // Optionally, you can reset the form fields
    rowField.value = "";
    whyField.checked = false;

    // console.log(selectedOption)
    // Hide the form container after form submission
  }