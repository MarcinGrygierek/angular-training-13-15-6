import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-conditional',
  templateUrl: './content-conditional.component.html',
  styleUrls: ['./content-conditional.component.scss']
})
export class ContentConditionalComponent implements OnInit {
  isVisible = false;
  constructor() { }

  ngOnInit(): void {
  }

}
