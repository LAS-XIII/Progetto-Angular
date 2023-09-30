import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnChanges {

  @Output() refreshList = new EventEmitter();
  @Input() list?: User[];
  displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'status', 'delete'];
  dataSource: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnChanges(): void {
    this.dataSource = <User[]>this.list;
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(() => {
      this.refreshList.emit()
    })
  }

}