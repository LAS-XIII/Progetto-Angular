import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  @Input() newId: number = 0;
  @Input() opened?: boolean = false;
  pageIsLarge: boolean = window.innerWidth>900;
  ultimateId: number = 0;
  data: {name:string, email:string, gender:string} = {name: "", email: "", gender: ""}

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUser()
  }

  toogle() {
    if (this.pageIsLarge) {
      this.opened = !this.opened;
    }
  }

  getAllUser() {
    this.userService.getUsers().subscribe((data: any) => {
      let fullList: User[] =  Object.keys(data).map((key) => {return data[key]})
      fullList.forEach((user) => {this.ultimateId = user.id>this.ultimateId ? user.id++ : this.ultimateId});
    })
  }

  onSubmit() {
    this.userService.insertUser({
      "id": this.newId+"",
      "name": this.data.name,
      "email": this.data.email,
      "gender": this.data.gender,
      "status": "active"
    }).subscribe()
    this.data = {name: "", email: "", gender: ""};
  }

}