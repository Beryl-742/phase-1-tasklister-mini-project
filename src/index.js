document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the page from reloading

    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;

      // Opted to add a delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = " Undo";
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
