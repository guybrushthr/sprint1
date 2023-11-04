'use strict';

var ToDo = /** @class */ (function () {
  function ToDo(task) {
    this.task = task;
    this.done = false;
  }
  ToDo.prototype.markAsDone = function () {
    this.done = true;
  };
  return ToDo;
})();

var ListOfTasks = /** @class */ (function () {
  function ListOfTasks() {
    this.tasks = [];
  }
  ListOfTasks.prototype.addTask = function (userInput) {
    var newTask = new ToDo(userInput);
    this.tasks.push(newTask);
  };
  ListOfTasks.prototype.deleteTask = function (userInput) {
    this.tasks.splice(
      this.tasks.findIndex(function (task) {
        return task.task === userInput;
      }),
      1
    );
  };
  ListOfTasks.prototype.markAsDone = function (userInput) {
    var lookedForTask = this.tasks.find(function (task) {
      return task.task === userInput;
    });
    if (lookedForTask) {
      lookedForTask.markAsDone();
    }
  };
  ListOfTasks.prototype.showList = function () {
    var list = this.tasks.reduce(function (acc, curr) {
      return (acc +=
        curr.task + (curr.done ? ' -> done' : ' -> do it') + '<br>');
    }, ' ');
    return list;
  };
  return ListOfTasks;
})();

var myToDoList = new ListOfTasks();
