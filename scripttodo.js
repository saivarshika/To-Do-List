// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");
        const li = document.createElement("li");

        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div>
                <button class="edit" onclick="editTask(this)">Edit</button>
                <button class="delete" onclick="deleteTask(this)">Delete</button>
                <button class="complete" onclick="toggleComplete(this)">✔️</button>
            </div>
        `;
        
        taskList.appendChild(li);
        taskInput.value = ""; // Clear input field
    }
}

// Function to toggle the "completed" state of a task
function toggleComplete(button) {
    const taskItem = button.closest("li");
    taskItem.classList.toggle("completed");
}

// Function to delete a task
function deleteTask(button) {
    const taskItem = button.closest("li");
    taskItem.remove();
}

// Function to edit a task
function editTask(button) {
    const taskItem = button.closest("li");
    const taskText = taskItem.querySelector(".task-text");

    const newText = prompt("Edit Task:", taskText.textContent);

    if (newText !== null && newText.trim() !== "") {
        taskText.textContent = newText.trim();
    }
}
