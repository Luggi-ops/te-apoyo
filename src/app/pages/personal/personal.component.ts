import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
}
