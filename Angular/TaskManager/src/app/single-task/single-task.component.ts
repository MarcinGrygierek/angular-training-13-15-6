import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss'],
})
export class SingleTaskComponent  {
  @Input()
  task!: Task;

  constructor(private tasksService: TasksService) {}

  handleDeleteTask(taskId: number) {
    this.tasksService.handleDeleteTask(taskId);
  }

  get status() {
    return this.task.status;
  }
}
