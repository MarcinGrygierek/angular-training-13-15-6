import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {

  @Input()
  tasks: Task[] = [];

  @Output()
  onDelete = new EventEmitter<number>();

  handleDeleteTask(taskId: number) {
    this.onDelete.emit(taskId);
  }

}
