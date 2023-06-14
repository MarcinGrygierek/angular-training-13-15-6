import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent  {
  @Input()
  task!: Task;

  @Output()
  onDelete = new EventEmitter<number>();

  handleDeleteTask(taskId: number) {
    this.onDelete.emit(taskId);
  }
}
