import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent  {
  
  @Input()
  name: string = 'Marcin';

  @Input()
  callback!: () => void;

  @Output()
  onClick = new EventEmitter<string>();

  constructor() { }

  handleButtonClick() {
    this.callback();
  }

  handleSecondButtonClick() {
    this.onClick.emit("Lorem ipsum");
  }

}