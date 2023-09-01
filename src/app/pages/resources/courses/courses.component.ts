import { Component } from '@angular/core';
import { courses } from '../data';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses:Array<any> = courses;
}
