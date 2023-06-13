class TaskManager {
  private tasks: string[] = [];

  get count() {
      return this.tasks.length;
  }

  getTasks() {
      return this.tasks;
  }

  addTask = (taskName: string) => {
      this.tasks.push(taskName);

      // wersja niemutująca
      // this.tasks = [...this.tasks, taskName];
  }

  deleteTask = (indexToDelete: number) => {
      this.tasks.splice(indexToDelete, 1);

      // wersja niemutująca
      // this.tasks = this.tasks.filter((_, index) => index !== indexToDelete);
  }
}

const taskManager = new TaskManager();
taskManager.addTask('1');
taskManager.addTask('2');
taskManager.addTask('3');
taskManager.addTask('4');
taskManager.deleteTask(2);

console.log(taskManager.getTasks(), taskManager.count);