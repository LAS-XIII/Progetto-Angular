import { Injectable } from '@angular/core';
import { Observable, throwError, pipe, catchError, interval } from 'rxjs';
import { User } from 'src/app/interfaces/user'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint: string = 'https://gorest.co.in/public/v2/users';
  headers = new HttpHeaders({ 
    "Authorization": "Bearer " + window.sessionStorage.getItem("token")
  })

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User> {
    return this.http.get<User>(this.endpoint, {headers: this.headers});
  }

  getUsersSelected(numberOfElements: number, name: string): Observable<User> {    
    return this.http.get<User>(this.endpoint + `?per_page=${numberOfElements}&name=${name}`, {headers: this.headers});
  }

  insertUser(body: {}): Observable<User> {
    return this.http.post<User>(this.endpoint, body, {headers: this.headers})
  }

  deleteUser(user : User): Observable<User> {
    return this.http.delete<User>(this.endpoint + "/" + user.id, {headers: this.headers});
  }

  getUserDetails(id: string): Observable<User> {
    return this.http.get<User>(this.endpoint + "/" + id, {headers: this.headers});
  }


}
