import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessContactComponent } from './business-contact/business-contact.component';
import { BusinessComponent } from './business.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MainSectionComponent } from './main-section/main-section.component';
import { BusinessBannerComponent } from './business-banner/business-banner.component';
import { UiModule } from 'src/app/ui/ui.module';



@NgModule({
  declarations: [
    BusinessContactComponent,
    BusinessComponent,
    MainSectionComponent,
    BusinessBannerComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    UiModule
  ]
})
export class BusinessModule { }
