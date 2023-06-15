import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class TodoService {
  todos: string[] = [];

  constructor() { 
    console.log('INIT');

    for(let i = 0; i < 5; i++) {
      const random = Math.round(Math.random() * 1000000).toString();
      this.todos.push(random);
    }
  }
}
