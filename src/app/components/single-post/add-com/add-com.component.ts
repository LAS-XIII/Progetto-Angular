import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from 'src/app/interfaces/comment';
import { CommentsService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-add-com',
  templateUrl: './add-com.component.html',
  styleUrls: ['./add-com.component.css']
})
export class AddComComponent implements OnInit{

  panelOpenState: boolean = false;
  @Input() idPost: number = 0;
  data: Comment = {
    id: 0,
    post_id: this.idPost,
    name: "",
    email: "",
    body: "",
  }

  constructor(private commentsService: CommentsService, private router: Router) {}

  ngOnInit() {
    this.searchId()
  }

  getRouter() {
    return this.router;
  }

  onSubmit() {
    this.commentsService.insertComment({      
        'id': this.data.id+"",
        'post_id': this.idPost+"",
        'name': this.data.name,
        'email': this.data.email,
        'body': this.data.body,
    }, this.idPost).subscribe(() => {
      this.data = {
        id: 0,
        post_id: 0,
        name: "",
        email: "",
        body: "",
      }
      this.searchId()
      window.open(this.router.url, "_self")
    })
    
  }

  searchId() {
    this.commentsService.getComment().subscribe((data: any) => {
      let commentList: Comment[] = Object.keys(data).map((key) => {return data[key]})
      commentList.forEach((comment) => {this.data.id = comment.id>this.data.id ? comment.id++ : this.data.id})
    })
  }

}
