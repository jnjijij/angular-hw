import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './app-posts.component.html',
  styleUrls: ['./app-posts.component.css'],
})
export class AppPostsComponent {
  @Input() userId!: number;
  // Add logic to fetch and display posts based on userId
}
