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

  @Output() closeSplitPane = new EventEmitter();

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
        SubMenu: [
          {
            title: "Dashboard",
            PageUrl: "Dashboard"
          }
        ]
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
            title: "User Details",
            PageUrl: "UserDetails"
          }
        ]
      }
    ];
  }

  OpenPanel(index: number) {
    this.OpenSubMenu[index] = !this.OpenSubMenu[index];
  }

  NavigateToPage(PageURL: any) {
    // console.log(PageURL);
    this.router.navigateByUrl(PageURL);
    if (Breakpoints.Handset || Breakpoints.TabletPortrait) {
      this.IsSplitPane = !this.IsSplitPane;
      this.closeSplitPane.emit(true);
    }
  }
}
