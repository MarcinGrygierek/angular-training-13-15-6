import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks-actions',
  templateUrl: './tasks-actions.component.html',
  styleUrls: ['./tasks-actions.component.scss']
})
export class TasksActionsComponent {
  @Output()
  onNewTask = new EventEmitter<string>();

  form: FormGroup;

  // form = new FormGroup({
  //   name: new FormControl('', Validators.required)
  // })

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    })
  }

  handleSubmit() {
    this.onNewTask.emit(this.form.controls['name'].value);
    this.form.reset();
  }
}
