import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isVisible = true;

  userName: string = 'Marian';
  numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  toggle() {
    this.isVisible = !this.isVisible;
  }

  addNumber() {
    this.numbers = [...this.numbers, (Math.round(Math.random() * 100))];
  }

  handleClick = () => {
    this.userName = 'Anna';
  }

  handleOnClick = (newName: string) => {
    console.log(newName);
    this.userName = newName;
  }
}
