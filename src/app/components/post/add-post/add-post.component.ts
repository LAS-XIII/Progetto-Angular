import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  newId: number = 0;
  opened?: boolean = false;
  pageIsLarge: boolean = window.innerWidth>900;
  data: {id:number, user_id:number , title:string, body:string} = {id:0, user_id:0 , title:"", body:""};

  constructor(private postService: PostService) {}

  toogle() {
    if (this.pageIsLarge) {
      this.opened = !this.opened;
    }
  }

  onSubmit() {
    this.getIdPost();
    this.inserPost()
  }

  getIdPost() {
    this.postService.getPost().subscribe((posts: any) => {
      let listPost = Object.keys(posts).map((key) => {return posts[key]})
      listPost.forEach(post => {
        this.newId = post.id>this.newId ? post.id+1 : this.newId;
      })
    })
  }

  inserPost() {
    this.postService.insertPost({
      "id": this.newId+"",
      "userId": this.data.user_id+"",
      "title": this.data.title,
      "body": this.data.body,
    }, this.data.user_id).subscribe()
  }

}
