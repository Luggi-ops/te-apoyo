import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { PersonalModule } from './personal/personal.module';
import { BusinessModule } from './business/business.module';
import { PricingModule } from './pricing/pricing.module';
import { ResourcesModule } from './resources/resources.module';
import { TestModule } from './test/test.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    AboutUsModule,
    PersonalModule,
    BusinessModule,
    PricingModule,
    ResourcesModule,
    TestModule,
  ]
})
export class PagesModule { }
