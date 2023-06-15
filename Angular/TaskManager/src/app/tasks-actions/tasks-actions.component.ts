import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-actions',
  templateUrl: './tasks-actions.component.html',
  styleUrls: ['./tasks-actions.component.scss']
})
export class TasksActionsComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private tasksService: TasksService) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    })
  }

  handleSubmit() {
    this.tasksService.handleNewTask(this.form.controls['name'].value);
    this.form.reset();
  }
}
