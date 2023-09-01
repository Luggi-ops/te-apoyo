import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { AboutUsTopComponent } from './about-us-top/about-us-top.component';
import { OurJourneyComponent } from './our-journey/our-journey.component';
import { AboutUsContactComponent } from './about-us-contact/about-us-contact.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    AboutUsComponent,
    AboutUsTopComponent,
    OurJourneyComponent,
    AboutUsContactComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class AboutUsModule { }
