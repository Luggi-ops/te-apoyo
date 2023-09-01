import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { ServiceOfferComponent } from './service-offer/service-offer.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ServiceOfferComponent,
    SuccessStoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
