import { Component, OnInit } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
}
