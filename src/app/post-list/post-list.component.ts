import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  listfPosts: Post[] = [];
  constructor(private postService:PostService) {}
  
  ngOnInit(): void {
   // console.log(this.post)
   this.listfPosts=this.postService.getPosts();
  }
}
