let currentTaskIndex = 0;

function checkTask(task) {
  const element = document.querySelector(task.targetElement);
  let actualValue;
  if (element instanceof HTMLImageElement || element instanceof HTMLIFrameElement) {
    actualValue = element.src;
  } else {
    actualValue = getComputedStyle(element)[task.targetProperty];
  }
  console.log(element)
  const expectedValue = task.correctValue;
  if (actualValue === expectedValue) {
    console.log("Task " + task.id + " completed successfully!");
    currentTaskIndex++;
    if (currentTaskIndex < tasks.length) {
        updateTaskDescription(currentTaskIndex);
      // If there are more tasks, show the next task
      const nextTask = tasks[currentTaskIndex];
      console.log("Next task:", nextTask);
    } else {
      // If there are no more tasks, show a message
      console.log("All tasks completed!");
      updateTaskDescription(currentTaskIndex);
      
    }
  } else {
    console.log("Task " + task.id + " failed. Expected " + expectedValue + ", got " + actualValue);
  }
}

window.addEventListener('load', function () {
    updateTaskDescription(0);
    const check = document.getElementById('checkTask');
    check.addEventListener("click", () => {
        const currentTask = tasks[currentTaskIndex];
        checkTask(currentTask);
      });
});

function updateTaskDescription(taskIndex) {
    const task = tasks[taskIndex];
    const taskDescriptionElement = document.getElementById("taskDescription");
    taskDescriptionElement.innerHTML = task.description;
  }