// Get the tab buttons and panes by their IDs
var tabButtons = document.querySelectorAll('[id^="tabButton"]');
var tabPanes = document.querySelectorAll('[id^="tabPane"]');

// Add click event listener to each tab button
tabButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Get the target pane ID based on the clicked button
    var targetPaneId = this.id.replace("tabButton", "tabPane");

    // Remove 'active' class from all tab buttons and panes
    tabButtons.forEach(function(button) {
      button.classList.remove("active");
    });

    tabPanes.forEach(function(pane) {
      pane.classList.remove("active");
    });

    // Add 'active' class to the clicked tab button and pane
    this.classList.add("active");
    document.getElementById(targetPaneId).classList.add("active");
  });
});
