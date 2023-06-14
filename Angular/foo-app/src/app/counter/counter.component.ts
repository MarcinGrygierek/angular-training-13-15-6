import {ChangeDetectionStrategy, Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit, OnDestroy, OnChanges {
  counter = 0;

  @Input()
  values: number[] = [];
  
  private int!: NodeJS.Timer;

  ngOnInit() {
    this.int = setInterval(() => {
      console.log('TICK');
      this.counter++;
    }, 1000)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnDestroy(): void {
    clearInterval(this.int);
  }

}
