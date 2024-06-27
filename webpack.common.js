document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const todoInput = document.getElementById('new-todo');
  const todoList = document.getElementById('todo-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo(todoInput.value);
    todoInput.value = '';
  });

  function addTodo(todoText) {
    const li = document.createElement('li');
    li.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }
});
