let tasks = [];
let editIndex = null;

//function to add items in list 
function addTask() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();

    if (task) {
        if (editIndex !== null) {
            tasks[editIndex] = task;
            editIndex = null;
        } else {
            tasks.push(task);
        }
        taskInput.value = '';
        renderTasks();
    }else{
        alert('Please enter some task');
    }
}

//function to edit items in list
function editTask(index) {
    const taskInput = document.getElementById('task-input');
    taskInput.value = tasks[index];
    editIndex = index;
}

//functon to delete items in list
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

//function to add elements in the html
function renderTasks() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task} 
            <div>
                <button class="list-edit" onclick="editTask(${index})">Edit</button>
                <button class="list-delete" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}


document.getElementById('task-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
