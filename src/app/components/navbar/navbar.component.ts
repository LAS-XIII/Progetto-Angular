import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navBarData } from './navData';
import { SideNavToogle } from 'src/app/interfaces/SideNavToogle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToogle> = new EventEmitter();
  collapsed: boolean = false;
  navData = navBarData;
  screenWidth: number = 0;
  notlog: boolean = true;

  constructor(private router: Router) {}

  getRouter() {
    return this.router;
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.notlog = window.sessionStorage.getItem("token")===null;
  }

  openSideBar() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  loggin() {
    this.router.navigateByUrl("/login") ;
  }

  loggingout() {
    window.sessionStorage.removeItem("token");
    this.notlog = true;
    this.router.navigateByUrl("/welcome") ;
  }

}
