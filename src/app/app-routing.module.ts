import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { BusinessComponent } from './pages/business/business.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: AboutUsComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'empresarial', component: BusinessComponent },
  { path: 'planes', component: PricingComponent },
  { path: 'recursos', component: ResourcesComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
