import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _tasks = new BehaviorSubject<Task[]>([]);
  public tasks$: Observable<Task[]>;

  handleNewTask(name: string) {
    const newTask = new Task(name);
    const currentTasks = this._tasks.getValue();
    this._tasks.next([...currentTasks, newTask]);
  }

  handleDeleteTask(idToDelete: number) {
    const currentTasks = this._tasks.getValue();
    const filteredTasks = currentTasks.filter(task => task.id !== idToDelete); 
    this._tasks.next(filteredTasks);
  }

  constructor() {
    this.tasks$ = this._tasks.asObservable();
   }
}
