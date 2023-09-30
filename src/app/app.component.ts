import { Component } from '@angular/core';
import { SideNavToogle } from './interfaces/SideNavToogle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isSideNavCollapsed: boolean = false;
  screenWidth: number = 0;

  onToggle(data: SideNavToogle) {
    this.isSideNavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }
}
