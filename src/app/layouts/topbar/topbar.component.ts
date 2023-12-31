import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  public isOpenMenu: boolean = false;

  open(){
    this.isOpenMenu = !this.isOpenMenu;
  }

  close(){
    this.isOpenMenu = false;
  }
}
