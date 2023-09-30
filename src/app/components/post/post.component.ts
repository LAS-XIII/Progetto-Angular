import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { Comment } from 'src/app/interfaces/comment';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  filter: string = "";
  posts: Post[] = [];
  comments: Comment[] = [];

  constructor(
    private postService: PostService,
  ) {}

  ngOnInit() {
      this.getPosts();
  }

  getPostsSelected(name: string) {
    this.postService.getPostSelected(name).subscribe((data: any) => {
      this.posts = Object.keys(data).map((key) => {return data[key]})
    })
  }

  getPosts() {
    this.postService.getPost().subscribe((data: any) => {
      this.posts = Object.keys(data).map((key) => {return data[key]})
    })
  }

  getSearchData(data: {search: string}) {
    this.filter = data.search;
    this.getPostsSelected(this.filter)
  }

}
