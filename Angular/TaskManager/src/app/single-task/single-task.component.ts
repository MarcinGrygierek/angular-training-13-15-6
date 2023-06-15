import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleTaskComponent  {
  @Input()
  task!: Task;

  @Output()
  onDelete = new EventEmitter<number>();

  handleDeleteTask(taskId: number) {
    this.onDelete.emit(taskId);
  }

  get status() {
    return this.task.status;
  }

  constructor() {
    setTimeout(() => {
      this.task.setDone();
    }, 3000);
  }
}
