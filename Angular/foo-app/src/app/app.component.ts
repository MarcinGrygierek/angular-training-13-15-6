import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string = 'Marian';

  handleClick = () => {
    this.userName = 'Anna';
  }

  handleOnClick = (newName: string) => {
    console.log(newName);
    this.userName = newName;
  }
}
