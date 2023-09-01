import { Component, OnInit } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit{
  ngOnInit(): void {
    AOS.init();
  }
}
