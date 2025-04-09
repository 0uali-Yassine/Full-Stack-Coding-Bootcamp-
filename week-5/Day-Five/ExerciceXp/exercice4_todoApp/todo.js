// todo.js

export class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(taskName) {
      this.tasks.push({ name: taskName, completed: false });
      console.log(` + Added task: "${taskName}"`);
    }
  
    markComplete(taskName) {
      const task = this.tasks.find((t) => t.name === taskName);
      if (task) {
        task.completed = true;
        console.log(`$ Marked "${taskName}" as complete!`);
      } else {
        console.log(`* Task "${taskName}" not found.`);
      }
    }
  
    listTasks() {
      console.log("\n Your Tasks:");
      this.tasks.forEach((task, index) => {
        const status = task.completed ? " Done" : " Pending";
        console.log(`${index + 1}. ${task.name} - ${status}`);
      });
    }
  }
  