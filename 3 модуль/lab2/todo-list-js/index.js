const tasks = [];

function addTask() {
  const newTask = document.getElementById('new-task').value;
  if (newTask.trim() !== '') {
    tasks.push({ text: newTask, completed: false });
    const taskIndex = tasks.length - 1;

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    const taskTextElement = document.createElement('span');
    taskTextElement.className = 'task-text';
    taskTextElement.innerText = newTask;
    taskTextElement.addEventListener('click', function() {
      tasks[taskIndex].completed = !tasks[taskIndex].completed;
      taskTextElement.classList.toggle('completed');
    });

    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    const editButton = document.createElement('button');
    editButton.className = 'edit-btn';
    editButton.innerText = '✏';
    editButton.addEventListener('click', function(e) {
      e.stopPropagation();
      const newValue = prompt('Редактировать задачу:', tasks[taskIndex].text);
      if (newValue !== null && newValue.trim() !== '') {
        tasks[taskIndex].text = newValue.trim();
        taskTextElement.innerText = newValue.trim();
      }
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.innerText = 'Удалить';
    deleteButton.addEventListener('click', function(e) {
      tasks.splice(taskIndex, 1);
      listItem.remove();
    });

     taskActions.appendChild(editButton);
     taskActions.appendChild(deleteButton);

    listItem.appendChild(taskTextElement);
    listItem.appendChild(taskActions);

    document.getElementById('todo-list').appendChild(listItem);
    document.getElementById('new-task').value = '';
  }
}

document.getElementById('add-button').onclick = addTask;
