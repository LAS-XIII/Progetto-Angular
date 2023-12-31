import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  auth: boolean = false;
  token: string = "";
  error: boolean = false;
 
  constructor(private loginService: LoginService, private router: Router) {}
  
  login() {
    this.loginService.authenticate(this.token).subscribe(
      () => {
        window.sessionStorage.setItem("token", this.token);
        window.open('http://localhost:4200/user','_self');
      }, (error) => {
        this.error = error.status==401 ? true : false;
      }
    )
  }

  onSubmit() {
    if (this.token !== "") {
      this.login();
    }
  }

}