import { Component, OnInit } from '@angular/core';
import { MenuItemViewModel, MenuItem } from '../models/menuItem';
import { ConvertMenuListToTree } from '../shared/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  collapseNavbar = true;

  menuItems: MenuItemViewModel[];

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.menuItems = ConvertMenuListToTree(MenuItem.list);

    this.router.events.pipe(
      filter(x => x instanceof NavigationEnd)
    ).subscribe(
      x => this.collapseNavbar = true
    );
  }

  toggleNav() {
    this.collapseNavbar = !this.collapseNavbar;
  }
}
