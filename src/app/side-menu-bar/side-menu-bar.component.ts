import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu-bar',
  templateUrl: './side-menu-bar.component.html',
  styleUrls: ['./side-menu-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideMenuBarComponent implements OnInit {

  MenuLinks: any = [];

  OpenSubMenu: boolean[] = [];

  constructor(public router: Router) {
    this.PrepareMenuLinks();
   }

  ngOnInit(): void {
  }

  PrepareMenuLinks() {
    this.MenuLinks = [
      {
        Icon : 'list',
        title : 'Dashboard',
        SubMenu: [
          {
            title : 'Dashboard',
            PageUrl : 'Dashboard',
          },
        ]
      },
      {
        Icon : 'people',
        title : 'Users',
        SubMenu: [
          {
            title : 'New User',
            PageUrl : 'User',
          }
       ]
      }
    ];
  }

  OpenPanel(index: number) {
  this.OpenSubMenu[index] = !this.OpenSubMenu[index];
  }

  NavigateToPage(PageURL: any) {
    console.log(PageURL);
     this.router.navigateByUrl(PageURL);
  }
}
