import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
 
  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) {}
  
  login() {
    console.log(this.token)
    this.loginService.authenticate(this.token).subscribe(() => {
        console.log("logging")
        window.sessionStorage.setItem("token", this.token);
        this.router.navigate(['../user'], { relativeTo: this.route });
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