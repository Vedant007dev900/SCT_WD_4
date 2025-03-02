document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const dateTimeInput = document.getElementById("dateTimeInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      const taskDateTime = dateTimeInput.value;

      if (taskText === "") {
          alert("Please enter a task.");
          return;
      }

      const listItem = document.createElement("li");
      listItem.innerHTML = `
          <span>${taskText} - ${taskDateTime}</span>
          <button class="delete-btn">X</button>
      `;

      taskList.appendChild(listItem);
      taskInput.value = "";
      dateTimeInput.value = "";

      listItem.querySelector(".delete-btn").addEventListener("click", () => {
          taskList.removeChild(listItem);
      });
  });
});
