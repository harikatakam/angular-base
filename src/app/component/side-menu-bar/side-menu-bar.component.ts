import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter
} from "@angular/core";
import { Router } from "@angular/router";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: "app-side-menu-bar",
  templateUrl: "./side-menu-bar.component.html",
  styleUrls: ["./side-menu-bar.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class SideMenuBarComponent implements OnInit {
  MenuLinks: any = [];

  @Output() toggleMenu = new EventEmitter();

  OpenSubMenu: boolean[] = [];
  IsSplitPane = false;

  constructor(
    public router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.PrepareMenuLinks();
  }

  ngOnInit(): void {}

  PrepareMenuLinks() {
    this.MenuLinks = [
      {
        Icon: "list",
        title: "Dashboard",
        PageUrl: "Dashboard"
      },
      {
        Icon: "people",
        title: "Users",
        SubMenu: [
          {
            title: "New User",
            PageUrl: "User"
          },
          {
            title: "Manage Users",
            PageUrl: "manageUsers"
          }
        ]
      }
    ];
  }

  OpenPanel(index: number) {
    this.OpenSubMenu[index] = !this.OpenSubMenu[index];
  }

  NavigateToPage(PageURL: any) {
    this.router.navigateByUrl(PageURL);
    this.toggleMenu.emit();
  }
}
