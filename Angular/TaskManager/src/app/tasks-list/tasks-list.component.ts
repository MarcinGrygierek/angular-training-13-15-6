import { Component } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  tasks$!: Observable<Task[]>;
  constructor(private tasksService: TasksService) {
    this.tasks$ = this.tasksService.tasks$;
  }
}
