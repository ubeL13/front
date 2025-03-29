const tasks = [];

function addTask() {
  const newTask = document.getElementById('new-task').value;
  if (newTask.trim() !== '') {
    tasks.push({ task: newTask, completed: false });
    const taskIndex = tasks.length - 1;

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';
    const taskNameElement = document.createElement('span');
    taskNameElement.innerText = newTask;
    listItem.appendChild(taskNameElement);

    listItem.addEventListener('click', function () {
      tasks[taskIndex].completed = !tasks[taskIndex].completed;
      listItem.classList.toggle('completed');
    });

    document.getElementById('todo-list').appendChild(listItem);
    document.getElementById('new-task').value = '';
  }
}

//1
function deleteTask()
{
  const items = document.querySelectorAll('#todo-list li');
  for(let i = items.length - 1; i >= 0; i-- ){
    if(items[i].classList.contains('completed')){
      tasks.splice(i, 1);
      items[i].remove();
    }
  }
}
function editTask() {
  const listItems = document.querySelectorAll('#todo-list li');

  for (let i = listItems.length - 1; i >= 0; i--) {
    if (listItems[i].classList.contains('completed')) {
      const currentText = tasks[i].text;

      const newValue = prompt(currentText);

      if (newValue !== null)
        tasks[i].text = newValue.trim();
      const span = listItems[i].querySelector('span');
      if (span) {
        span.textContent = tasks[i].text;
      }
    }
  }
}



document.getElementById('add-button').onclick = addTask;
document.getElementById('delete-button').onclick = deleteTask;
document.getElementById('edit-button').onclick = editTask;
