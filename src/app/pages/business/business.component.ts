import { Component, OnInit } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit{
  ngOnInit(): void {
    AOS.init();
  }
}
