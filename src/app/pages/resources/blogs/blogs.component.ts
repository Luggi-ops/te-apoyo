import { Component } from '@angular/core';
import { blogCategories, blogs } from '../data';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  categories: Array<any> = blogCategories;
  blogs: Array<any> = blogs;
  
}
