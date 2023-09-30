import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  filter: string = "";
  elementForPage: number = 10;
  usersList?: User[];
  open: boolean = false;

  constructor(private userService: UserService, private login: LoginService) {}

  ngOnInit(): void {
    this.getSearchData({search: this.filter, elements: this.elementForPage})
  }

  getSearchData(data: {search: string, elements: number}) {
    this.filter = data.search;
    this.elementForPage = data.elements;
    this.getListUser();
  }

  getListUser() {
    this.userService.getUsersSelected(this.elementForPage, this.filter).subscribe((data: any) => {
      this.usersList = Object.keys(data).map((key) => {return data[key]})
    })
  }

  add() {
    this.open = true;
  }

}