import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get<T>(url: string) {
    return this.http.get<T>(url).pipe(
      retry(3),
      catchError(err => {
        console.log(err);
        return of();
      })
    )
  }
}
