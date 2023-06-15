import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [TodoService],
})
export class TodosComponent implements OnInit {
  todos: string[] = [];
  constructor(private todoService: TodoService) {
    this.todos = this.todoService.todos;
   }

  ngOnInit(): void {
  }

}
