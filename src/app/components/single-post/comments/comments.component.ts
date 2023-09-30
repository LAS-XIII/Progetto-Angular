import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment';
import { CommentsService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{

  @Input() idPost: number = 0;
  comments?: Comment[];

  constructor(private commentsService: CommentsService) {}

  getComments() {
    this.commentsService.getCommentForPost(this.idPost).subscribe((data: any) => {
      this.comments = Object.keys(data).map((key) => {return data[key]})
    })
  }

  ngOnInit(): void {
    this.getComments()
  }

}
