// app-posts.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { PostService } from './post.service'; // Adjust the path based on your file structure

@Component({
  selector: 'app-posts',
  templateUrl: './app-posts.component.html',
  styleUrls: ['./app-posts.component.css'],
})
export class AppPostsComponent implements OnInit {
  @Input() userId!: number;
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    if (this.userId) {
      this.loadPosts();
    }
  }

  private loadPosts(): void {
    this.postService.getPostsByUserId(this.userId).subscribe(
      (posts) => {
        this.posts = posts;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}
