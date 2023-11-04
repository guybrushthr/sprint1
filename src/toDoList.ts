export class ToDo {
    task: string;
    done: boolean;
  
    constructor(task: string) {
      this.task = task;
      this.done = false;
    }
  
    markAsDone() {
      this.done = true;
    }
  }
  
  export class ListOfTasks {
    tasks: ToDo[] = [];
  
    addTask(userInput: string) {
      const newTask = new ToDo(userInput);
      this.tasks.push(newTask);
    }
  
    deleteTask(userInput: string) {
      this.tasks.splice(
        this.tasks.findIndex((task) => task.task === userInput),
        1
      );
    }
  
    markAsDone(userInput: string) {
      const lookedForTask = this.tasks.find((task) => task.task === userInput);
      if (lookedForTask) {
        lookedForTask.markAsDone();
      }
    }
  
    showList() {
      const list = this.tasks.reduce((acc: string, curr: ToDo) => {
        return (acc +=
          curr.task + (curr.done ? ' -> done' : ' -> do it') + '<br>');
      }, ' ');
      return list;
    }
  }
  
  
  const myToDoList: ListOfTasks = new ListOfTasks();
  
  //Testing functionality
  
  // myToDoList.addTask('task1');
  // myToDoList.addTask('task2');
  // myToDoList.addTask('task3');
  // console.log(myToDoList);
  // myToDoList.deleteTask('task2');
  // console.log(myToDoList);
  // myToDoList.markAsDone('task3');
  // console.log(myToDoList);
  // console.log(myToDoList.showList());