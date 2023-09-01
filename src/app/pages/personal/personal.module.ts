import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal.component';
import { PersonalTopSectionComponent } from './personal-top-section/personal-top-section.component';
import { PersonalContactUsComponent } from './personal-contact-us/personal-contact-us.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PlanesComponent } from './planes/planes.component';
import { TakeTestComponent } from './take-test/take-test.component';
import { EngagementComponent } from './engagement/engagement.component';
import { OurPlatformComponent } from './our-platform/our-platform.component';



@NgModule({
  declarations: [
    PersonalComponent,
    PersonalTopSectionComponent,
    PersonalContactUsComponent,
    PlanesComponent,
    TakeTestComponent,
    EngagementComponent,
    OurPlatformComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PersonalModule { }
