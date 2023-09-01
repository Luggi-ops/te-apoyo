import { AfterViewInit, Component } from '@angular/core';
import 'slick-carousel';
import * as $ from 'jquery';
import AOS from "aos";

@Component({
  selector: 'app-service-offer',
  templateUrl: './service-offer.component.html',
  styleUrls: ['./service-offer.component.css']
})
export class ServiceOfferComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    (<any>$('.slider-business')).slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '.custom-prev-arrow',
      nextArrow: '.custom-next-arrow',
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }
}
