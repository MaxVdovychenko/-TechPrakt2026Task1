import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="container">
    <h1>Трекер завдань</h1>
    <div class="form">
      <input type="text" id="taskInput" placeholder="Введіть завдання..." />
      <button id="addTaskBtn">Додати</button>
    </div>
    <ul id="taskList" class="task-list"></ul>
  </div>
`;

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;
    li.classList.add('task-item');

    taskList.appendChild(li);
    taskInput.value = '';
});