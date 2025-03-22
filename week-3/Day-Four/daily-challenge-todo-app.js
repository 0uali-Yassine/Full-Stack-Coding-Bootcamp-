const tasks = [];

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const task = {
        task_id: tasks.length,
        text: taskText,
        done: false
    };

    tasks.push(task);
    taskInput.value = '';

    renderTasks();
}

function renderTasks() {
    const listTasks = document.querySelector('.listTasks');
    listTasks.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.setAttribute('data-task-id', task.task_id);

        if (task.done) {
            taskElement.classList.add('done');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.done;
        checkbox.addEventListener('change', function() {
            doneTask(task.task_id);
        });

        const label = document.createElement('label');
        label.textContent = task.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
        deleteBtn.addEventListener('click', function() {
            deleteTask(task.task_id);
        });

        taskElement.appendChild(checkbox);
        taskElement.appendChild(label);
        taskElement.appendChild(deleteBtn);
        listTasks.appendChild(taskElement);
    });
}

function doneTask(taskId) {
    const task = tasks.find(task => task.task_id === taskId);
    task.done = !task.done;
    renderTasks();
}

function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.task_id === taskId);
    tasks.splice(taskIndex, 1);
    renderTasks();
}