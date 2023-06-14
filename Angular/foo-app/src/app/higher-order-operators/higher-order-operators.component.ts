import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { switchMap, concatMap, exhaustMap, take, interval, mergeMap, map, of } from 'rxjs';

@Component({
  selector: 'app-higher-order-operators',
  templateUrl: './higher-order-operators.component.html',
  styleUrls: ['./higher-order-operators.component.scss']
})
export class HigherOrderOperatorsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const obs = interval(20).pipe(take(6))

    obs
      .pipe(
        switchMap(id => this.http.get(`https://pokeapi.co/api/v2/pokemon/${id + 1}`))
      )
      .subscribe(val => console.log(val))
  }

}
