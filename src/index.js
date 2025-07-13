document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;

      // Optional: Add delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = " X";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.addEventListener("click", () => {
        li.remove();
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      taskInput.value = ""; // Clear the input
    }
  });
});
