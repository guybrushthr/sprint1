import { ToDo, ListOfTasks } from '../toDoList';

test('method correctly adds task to ToD', () => {
  const myToDo = new ToDo('task1');
  expect(myToDo.task).toBe('task1');
});

test('method correctly adds object to array', () => {
  const myToDoList = new ListOfTasks();
  myToDoList.addTask('task1');
  const indexLookedForTask = myToDoList.tasks.findIndex(
    (task: ToDo) => task.task === 'task1'
  );
  expect(myToDoList.tasks[indexLookedForTask].task).toBe('task1');
});

test('method correctly deletes object from array', () => {
  const myToDoList = new ListOfTasks();
  myToDoList.addTask('task1');
  myToDoList.addTask('task2');
  myToDoList.deleteTask('task2');
  const indexLookedForTask = myToDoList.tasks.findIndex(
    (task: ToDo) => task.task === 'task2'
  );
  if (indexLookedForTask >= 0) {
    expect(myToDoList.tasks[indexLookedForTask].task).toBe('');
  }
});

test('method correctly toggles done from false to true', () => {
  const myToDoList = new ListOfTasks();
  myToDoList.addTask('task1');
  myToDoList.markAsDone('task1');
  const indexLookedForTask = myToDoList.tasks.findIndex(
    (task: ToDo) => task.task === 'task1'
  );
  if (indexLookedForTask >= 0) {
    expect(myToDoList.tasks[indexLookedForTask].done).toBe(true);
  }
});