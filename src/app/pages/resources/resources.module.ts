import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from './resources.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CoursesComponent } from './courses/courses.component';



@NgModule({
  declarations: [
    ResourcesComponent,
    BlogsComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResourcesModule { }
