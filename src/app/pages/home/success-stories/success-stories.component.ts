import { Component, OnInit } from '@angular/core';
import { stories } from './data';

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css']
})
export class SuccessStoriesComponent{
  public data:Array<any> = stories;
}
