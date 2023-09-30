import { Injectable } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  endpoint: string = 'https://gorest.co.in/public/v2/';
  headers = new HttpHeaders({ 
    "Authorization": "Bearer " + window.sessionStorage.getItem("token")
  })

  constructor(private http: HttpClient) {}

  getPost(): Observable<Post> {
    return this.http.get<Post>(this.endpoint + "posts", {headers: this.headers});
  }

  getPostSelected(title: string): Observable<Post> {
    return this.http.get<Post>(this.endpoint + `posts?title=${title}`, {headers: this.headers});
  }

  getPostOfUser(id: string): Observable<Post> {
    return this.http.get<Post>(this.endpoint + "users/" + id + "/posts", {headers: this.headers});
  }

  insertPost(body: {}, userId: number): Observable<Post> {
    return this.http.post<Post>(this.endpoint + "users/" + userId + "/posts", body, {headers: this.headers})
  }

}
