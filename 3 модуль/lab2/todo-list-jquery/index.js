const tasks = [];

function addTask() {
  const newTask = $('#new-task').val();
  if (newTask.trim() !== '') {
    tasks.push({ text: newTask, completed: false });
    const listItem = $('<li class="todo-item"></li>');
    const taskText = $('<span class="task-text"></span>').text(newTask);

    // Создаем кнопки для каждой задачи
    const editButton = $('<button class="edit-btn">✏</button>');
    const deleteButton = $('<button class="delete-btn">Удалить</button>');
    const buttonsContainer = $('<div class="task-buttons"></div>');

    buttonsContainer.append(editButton, deleteButton);
    listItem.append(taskText, buttonsContainer);

    // Обработчик клика по задаче (отметка выполненной)
    listItem.on('click', function(e) {
      // Проверяем, что клик был не по кнопке
      if (!$(e.target).is('button')) {
        const index = $(this).index();
        tasks[index].completed = !tasks[index].completed;
        $(this).toggleClass('completed');
      }
    });

    // Обработчик кнопки удаления
    deleteButton.on('click', function(e) {
      e.stopPropagation(); // Предотвращаем всплытие события
      const index = $(this).closest('li').index();
      tasks.splice(index, 1);
      $(this).closest('li').remove();
    });

    // Обработчик кнопки редактирования
    editButton.on('click', function(e) {
      e.stopPropagation(); // Предотвращаем всплытие события
      const listItem = $(this).closest('li');
      const index = listItem.index();
      const currentText = tasks[index].text;
      const newValue = prompt("Редактировать задачу:", currentText);

      if (newValue !== null) {
        tasks[index].text = newValue;
        listItem.find('.task-text').text(newValue);
      }
    });

    $('#todo-list').append(listItem);
    $('#new-task').val('');
  }
}

$('form').on('submit', function(e) {
  e.preventDefault();
  addTask();
});