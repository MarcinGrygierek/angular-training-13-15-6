import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable, Subject, map, scan } from 'rxjs';

@Component({
  selector: 'app-users-stats',
  templateUrl: './users-stats.component.html',
  styleUrls: ['./users-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersStatsComponent implements OnInit {
  total!: Observable<number>;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.total = this.usersService.users$.pipe(
      map(val => val.length)
    );
  }
}
