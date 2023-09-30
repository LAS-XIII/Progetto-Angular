import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  breakpoint: string = "https://gorest.co.in/public/v2/users?access-token=";

  constructor(private http: HttpClient ) {}

  authenticate(pass: string): Observable<{}> {
    return this.http.get(this.breakpoint + pass);
  }

}
