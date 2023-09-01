import { Component, OnInit } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit{
  ngOnInit(): void {
    AOS.init();
  }
}
