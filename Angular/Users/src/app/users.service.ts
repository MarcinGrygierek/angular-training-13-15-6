import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _users: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public users$!: Observable<string[]>;

  constructor() {
    this.users$ = this._users.asObservable();
    
    setInterval(() => {
      const newUser = 'LoremIpsum' + Math.round(Math.random() * 100);
      const currentUsers = this._users.getValue();
      this._users.next([...currentUsers, newUser]);
    }, 1000)
   }
}
