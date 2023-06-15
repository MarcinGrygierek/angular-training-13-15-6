import { Component, OnInit } from '@angular/core';
import { Observable,filter, switchMap, debounceTime, distinctUntilChanged  } from 'rxjs';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { ApiService } from '../api.service';

interface Show {
  show: {
    name: string;
  }
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  observableValue!: Observable<string | null>;

  results!: Observable<Show[]>;

  form = new FormGroup({
    search: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.results = this.form.controls.search.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(val => !!val && val.length >= 3),
      switchMap(search => this.api.get<Show[]>(`https://api.tvmsaze.com/search/shows?q=${search}`)),
    );
  }

  hasErrors(fieldName: string): boolean {
    const field = this.form.get(fieldName);

    if(!field) return false;

    return field.invalid;
  }

  getErrors(fieldName: string): ValidationErrors {
    const field = this.form.get(fieldName);

    if(!field) return {};

    return field.errors || {};
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
