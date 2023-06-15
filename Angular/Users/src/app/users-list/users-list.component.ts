import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  users!: Observable<string[]>;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
   this.users = this.usersService.users$;
  }

}
