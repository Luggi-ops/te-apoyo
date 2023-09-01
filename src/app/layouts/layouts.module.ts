import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { UiModule } from '../ui/ui.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule,
  ],
  exports: [
    TopbarComponent,
    FooterComponent
  ]
})
export class LayoutsModule { }
