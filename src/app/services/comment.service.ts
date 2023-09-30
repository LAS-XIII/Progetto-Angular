import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/interfaces/comment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  endpoint: string = 'https://gorest.co.in/public/v2/';
  headers = new HttpHeaders({ 
    "Authorization": "Bearer " + window.sessionStorage.getItem("token")
  })

  constructor(private http: HttpClient) {}

  getComment(): Observable<Comment> {
    return this.http.get<Comment>(this.endpoint + "comments", {headers: this.headers});
  }

  getCommentForPost(idPost: number): Observable<Comment> {
    return this.http.get<Comment>(this.endpoint + "/posts/" + idPost + "/comments", {headers: this.headers});
  }

  insertComment(body: {}, idPost: number): Observable<Comment> {
    return this.http.post<Comment>(this.endpoint + `posts/${idPost}/comments`, body, {headers: this.headers})
  }

}
