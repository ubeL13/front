const tasks = [];

function addTask() {
  const newTask = $('#new-task').val();
  if (newTask.trim() !== '') {
    tasks.push({ text: newTask, completed: false });
    const listItem = $('<li class="todo-item"></li>');
    const taskText = $('<span></span>').text(newTask);
    $(listItem).append(taskText);

    $(listItem).on('click', function () {
      const index = $(this).index();
      tasks[index].completed = !tasks[index].completed;
      $(this).toggleClass('completed');
    });

    $('#todo-list').append(listItem);
    $('#new-task').val('');
  }
}

//1
function deleteTask() {
  $('.todo-item.completed').each(function() {
    const index = $(this).index();
    tasks.splice(index, 1);
    $(this).remove();
  });
}

//2
function editTask() {
  $('.todo-item').each(function() {
    const index = $(this).index();
    const currentText = tasks[index].text;
    const newValue = prompt(currentText);
    tasks[index].text = newValue;
    $(this)
        .find('span')
        .text(newValue);
  });
}


$('#deleteButton').on('click', deleteTask);
$('#editButton').on('click', editTask);
$('form').on('submit', function (e) {
  e.preventDefault();
  addTask();
});