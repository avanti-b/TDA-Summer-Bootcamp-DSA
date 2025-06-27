const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const filterButtons = document.querySelectorAll(".filter-btn");

let tasks = [];
let currentFilter = "all";

// Add Task
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text !== "") {
    tasks.push({ text, completed: false });
    input.value = "";
    renderTasks();
  }
});

// Toggle Complete / Delete
taskList.addEventListener("click", (e) => {
  const index = e.target.closest("li")?.dataset?.index;
  if (e.target.classList.contains("complete-btn")) {
    tasks[index].completed = !tasks[index].completed;
  } else if (e.target.classList.contains("delete-btn")) {
    tasks.splice(index, 1);
  }
  renderTasks();
});

// Filter Buttons
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

// Render Function
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, i) => {
    if (
      currentFilter === "completed" && !task.completed ||
      currentFilter === "pending" && task.completed
    ) return;

    const li = document.createElement("li");
    li.dataset.index = i;
    li.innerHTML = `
      <span class="${task.completed ? "completed" : ""}">${task.text}</span>
      <div>
        <button class="complete-btn">✔️</button>
        <button class="delete-btn">🗑️</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}
