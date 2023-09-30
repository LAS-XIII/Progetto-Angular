import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { Comment } from 'src/app/interfaces/comment'

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {

  panelOpenState: boolean = false;
  @Input() thereAreAnyPosts: boolean = false;
  @Input() posts: Post[] = []
  comments: Comment[] = [];

  constructor() {}

}
