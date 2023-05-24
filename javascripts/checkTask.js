let currentTaskIndex = 0;

// function getOptionValue() {
//   const optionSelected = document.querySelector('input[name="why"]:checked');
//   const selectedValue = optionSelected.value;
//   return selectedValue
// }
let actualRow = ""
let selectedRow = ""
let selectedOption = ""
let actualOption = ""
let expectedValue = ""
let actualValue = ""
function checkTask(task) {
  checkComputedTask(task)
  console.log("what expect", expectedValue)
}

function checkOptionTask(task) {
  actualOption = task.correctOption
  actualRow = task.correctRow
  if (actualValue === expectedValue && selectedOption === actualOption && selectedRow === actualRow) {
    console.log("Task " + task.id + " completed successfully!");
    toggleForm()
    currentTaskIndex++;
    if (currentTaskIndex < tasks.length) {
      updateTaskDescription(currentTaskIndex);
      updateTaskOptions(currentTaskIndex);
      resetValues()
      popUp(3)
      // If there are more tasks, show the next task
      const nextTask = tasks[currentTaskIndex];
      console.log("Next task:", nextTask);
    } else {
      // If there are no more tasks, show a message
      console.log("All tasks completed!");
      updateTaskDescription(currentTaskIndex);
      updateTaskOptions(currentTaskIndex);
      resetValues()
      popUp(3)
    }
  } else {
    console.log("Task " + task.id + " failed. Expected " + expectedValue + ", got " + actualValue, "or", selectedOption, " instead of ", actualOption);
    popUp(2)
    resetValues()
  }
}

function checkComputedTask(task) {
  
  const element = document.querySelector(task.targetElement);
  if (element instanceof HTMLImageElement || element instanceof HTMLIFrameElement) {
    actualValue = element.src;
  } else {
   try{
    actualValue = getComputedStyle(element)[task.targetProperty];}
    catch {
      popUp(1)
    }
  }
  expectedValue = task.correctValue;
  console.log(expectedValue);

  if (actualValue === expectedValue) {
    console.log("act = exp")
    toggleForm()
  }
  else{
    console.log("poop")
  }
}

function updateTaskOptions(taskIndex) {
  console.log("option");
  const task = tasks[taskIndex];
  const option1Element = document.getElementById("option1desc");
  const option2Element = document.getElementById("option2desc");
  const option3Element = document.getElementById("option3desc");

  option1Element.innerHTML = task.option1;
  option2Element.innerHTML = task.option2;
  option3Element.innerHTML = task.option3;
}

window.addEventListener("load", function () {
  updateTaskDescription(currentTaskIndex);
  const check = document.getElementById("checkTask");
  check.addEventListener("click", () => {
    const currentTask = tasks[currentTaskIndex];
    console.log(currentTaskIndex);
    // toggleForm();
    updateTaskOptions(currentTaskIndex);
    checkTask(currentTask);
  });

  const form = document.getElementById("responseForm");
  form.addEventListener("submit", handleFormSubmit);
});


function updateTaskDescription(taskIndex) {
  const task = tasks[taskIndex];
  const taskDescriptionElement = document.getElementById("taskDescription");
  taskDescriptionElement.innerHTML = task.description;

}

function resetValues() {
  selectedOption = ""
  actualOption = ""
  expectedValue = ""
  actualValue = ""
  actualRow = ""
  selectedRow = ""
}