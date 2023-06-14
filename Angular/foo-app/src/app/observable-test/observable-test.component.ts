import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.scss']
})
export class ObservableTestComponent implements OnInit {

  constructor() { }

  async runPromise() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('SUKCES PROMISE')
      }, 2000);
    })

    setTimeout(async() => { 
      const result = await promise;
      console.log(result);
    }, 1500);
   
    const result = await promise;
    console.log(result);
  }

  runObservable() {
    const observable = new Observable(observer => {
      setInterval(() => {
        observer.next('SUKCES OBSERVABLE')
      }, 2000);
    })

    setTimeout(() => {
      observable.subscribe(val => console.log(val));
    }, 1500)

  }

  runMultiObservable() {
    const observable = new Observable(observer => {
      let counter = 0;
      setInterval(() => {
        observer.next(counter++);
      }, 1000)
    })

    observable.subscribe(val => console.log(val));
    setTimeout(() => {
      observable.subscribe(val => console.log(val));
    }, 2000);
  }

  ngOnInit(): void {
    this.runPromise()
    this.runObservable();
    this.runMultiObservable();
  }

}
