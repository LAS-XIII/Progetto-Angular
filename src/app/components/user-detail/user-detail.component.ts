import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

  idUser?: number = parseInt(<string>this.activatedRoute.snapshot.paramMap.get("userId"));
  thereArePosts: boolean = false;
  user?: User ;
  posts: Post[] = [];

  constructor(
    private activatedRoute: ActivatedRoute, 
    private userService: UserService,
    private postService: PostService, 
  ) {}

  getUser() {
    this.userService.getUserDetails(this.idUser+"").subscribe(data => {this.user = data})
  }

  getPostsOfUser() {
    this.postService.getPostOfUser(this.idUser+"").subscribe((data: any) => {
      this.posts = Object.keys(data).map((key) => {return data[key]})
      this.thereArePosts = true;
    })
  }

  ngOnInit(): void {
      this.getUser();
      this.getPostsOfUser();
  }

}
