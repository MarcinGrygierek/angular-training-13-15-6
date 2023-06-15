import { Component, OnInit } from '@angular/core';
import { from, of, fromEvent, forkJoin, merge, take, concat, combineLatest, timer, startWith, debounceTime, distinctUntilChanged, map, filter, interval, tap } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.scss']
})
export class RxjsTestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // const result = arr
    //   .map(val => val ** 2)
    //   .filter(val => val % 2 === 0);

    // console.log(result);

    //   interval(500)
    //   .pipe(
    //     map(val => val ** 2),
    //     tap(val => console.log('TAP', val)),
    //     filter(val => val % 2 === 0)
    //   )
    //   .subscribe(val => console.log(val)); 

    // of(...arr).subscribe(val => console.log(val)); 

    // const arr2 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4];

    // console.log("StartsWith")
    // from(arr2)
    //   .pipe(startWith(-100))
    //   .subscribe(val => console.log(val))

    //   console.log("debounceTime")
    //   from(arr2)
    //     .pipe(
    //       debounceTime(100))
    //     .subscribe(val => console.log(val))

    //     console.log("distinctUntilChanged")
    //     from(arr2)
    //       .pipe(
    //         distinctUntilChanged()
    //       )
    //       .subscribe(val => console.log(val))

    // const obs1 = of(1, 2, 3, 4);
    // const obs2 = of(5, 6, 7, 8);
    // const obs3 = of(9, 10, 11, 12);

    // forkJoin([obs1, obs2, obs3]).subscribe(val => console.log(val));

    // const timer1 = timer(500, 1000);
    // const timer2 = timer(1000, 2000);
    // const timer3 = timer(0, 3000);

    // combineLatest([timer1, timer2, timer3]).subscribe(val => console.log(val));
  
    const timer1 = this.http.get('https://api.ipify.org?format=json');
    const timer2 = this.http.get('https://api.ipify.org?format=json');
    const timer3 = this.http.get('https://api.ipify.org?format=json');

    forkJoin([timer1, timer2, timer3]).subscribe(val => console.log(val));
  
    const source = fromEvent(document.querySelector('p')!, 'click');

  }
}
