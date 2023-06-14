import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-good-observable',
  templateUrl: './good-observable.component.html',
  styleUrls: ['./good-observable.component.scss']
})
export class GoodObservableComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  constructor() { }

  ngOnInit(): void {
    const obs = new Observable(observer => {
      let counter = 0;
      const int = setInterval(() => {
        console.log('COUNTER', counter);

        if(counter % 3 === 0)
          observer.error(counter++);
        else 
          observer.next(counter++);
      }, 500);

      return {
        unsubscribe() {
          clearInterval(int);
        }
      }
    })
    
    this.sub = obs.subscribe({
      next: val => console.log('SUB',val),
      error: val => console.log('ERR',val),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
