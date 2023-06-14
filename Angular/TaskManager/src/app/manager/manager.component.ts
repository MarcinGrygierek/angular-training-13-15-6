import { Component } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent  {
  tasks: Task[] = [];

  handleNewTask(name: string) {
    const newTask = new Task(name);
    this.tasks.push(newTask);
  }

  handleDeleteTask(idToDelete: number) {
    const indexToDelete = this.tasks.findIndex(task => task.id === idToDelete);
    this.tasks.splice(indexToDelete, 1);
  }
}
