import { v4 as uuidV4 } from 'uuid';
// console.log(uuidV4());
type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};
const list = document.querySelector('#liststyle') as HTMLUListElement;
const form = document.querySelector('#new-task') as HTMLSelectElement;
const input = document.querySelector('#text') as HTMLInputElement;
const tasks: Task[] = loadtask();
tasks.forEach(addListItem);

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(task);
  saveTask();
  // console.log(input.value);

  input.value ? addListItem(task) : '';
  input.value = '';
});

function addListItem(task: Task) {
  const item = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');

  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked;
  });

  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);

  return true;
}

function saveTask() {
  localStorage.setItem('Tasks', JSON.stringify(tasks));
}

function loadtask(): Task[] {
  const jsontask = localStorage.getItem('Tasks');
  if (jsontask == null) return [];
  return JSON.parse(jsontask);
}
