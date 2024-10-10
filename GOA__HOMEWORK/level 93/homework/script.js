var taskInput = document.getElementById('taskInput');
var addTaskBtn = document.getElementById('addTaskBtn');
var taskList = document.getElementById('taskList');
var clearTasksBtn = document.getElementById('clearTasksBtn');

var tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${tasks[i].completed ? 'checked' : ''} onchange="toggleTaskCompletion(${i})">
            <span class="${tasks[i].completed ? 'completed' : ''}">${tasks[i].text}</span>
            <button onclick="deleteTask(${i})">Delete</button>
        `;
        taskList.appendChild(li);
    }
}

function addTask() {
    var taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function clearTasks() {
    tasks = [];
    renderTasks();
}

addTaskBtn.onclick = addTask;
clearTasksBtn.onclick = clearTasks;

renderTasks();
