var taskId = 0;
var taskNamesContainer = document.getElementById("task-names");

document.getElementById("task-form").addEventListener("submit", function(e) {
  e.preventDefault();

  var taskInput = document.getElementById("task-input");
  var descriptionInput = document.getElementById("description-input");
  var dueDateInput = document.getElementById("due-date-input");
  var taskList = document.getElementById("task-list");

  var taskText = taskInput.value.trim();
  var descriptionText = descriptionInput.value.trim();
  var dueDateText = dueDateInput.value;

  if (taskText !== "") {
    taskId++;

    var li = document.createElement("li");
    li.setAttribute("data-task-id", taskId);
    li.classList.add("task");

    var taskNumber = document.createElement("span");
    taskNumber.textContent = "Task #" + taskId;
    taskNumber.classList.add("task-number");
    li.appendChild(taskNumber);

    var taskHeading = document.createElement("h3");
    taskHeading.textContent = taskText;

    var descriptionPara = document.createElement("p");
    descriptionPara.innerHTML = "<strong>Description:</strong> <span class='editable'>" + descriptionText + "</span>";
    descriptionPara.addEventListener("click", function() {
      descriptionPara.innerHTML = "<strong>Description:</strong> <input class='edit-input' type='text' value='" + descriptionText + "'>";
      var editInput = descriptionPara.querySelector(".edit-input");
      editInput.focus();
      editInput.addEventListener("blur", function() {
        descriptionText = editInput.value.trim();
        descriptionPara.innerHTML = "<strong>Description:</strong> <span class='editable'>" + descriptionText + "</span>";
      });
    });

    var dueDatePara = document.createElement("p");
    dueDatePara.innerHTML = "<strong>Due Date:</strong> <span class='editable'>" + dueDateText + "</span>";
    dueDatePara.addEventListener("click", function() {
      dueDatePara.innerHTML = "<strong>Due Date:</strong> <input class='edit-input' type='date' value='" + dueDateText + "'>";
      var editInput = dueDatePara.querySelector(".edit-input");
      editInput.focus();
      editInput.addEventListener("blur", function() {
        dueDateText = editInput.value;
        dueDatePara.innerHTML = "<strong>Due Date:</strong> <span class='editable'>" + dueDateText + "</span>";
      });
    });

    var completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", function() {
      li.classList.toggle("completed");
      if (li.classList.contains("completed")) {
        completeButton.textContent = "Completed";
      } else {
        completeButton.textContent = "Complete";
      }
    });

    var deleteButton = document
