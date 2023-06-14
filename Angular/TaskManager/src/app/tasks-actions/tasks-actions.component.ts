import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tasks-actions',
  templateUrl: './tasks-actions.component.html',
  styleUrls: ['./tasks-actions.component.scss']
})
export class TasksActionsComponent {
  @Output()
  onNewTask = new EventEmitter<string>();

  handleNewTask() {
    this.onNewTask.emit('Lorem ipsum');
  }
}
