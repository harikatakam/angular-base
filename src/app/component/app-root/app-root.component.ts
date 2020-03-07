import { Component, ViewChild, Renderer2 } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { MatSidenav } from "@angular/material/sidenav";
import { Router } from "@angular/router";
@Component({
  selector: "app-app-root",
  templateUrl: "./app-root.component.html",
  styleUrls: ["./app-root.component.scss"]
})
export class AppRootComponent {
  // title = 'InsApp';
  // @ViewChild('sidenav') sideNav : MatSidenav;
  isHandset = false;
  isHandset$;

  OpenSubMenu: boolean[] = [];

  IsSplitPane = false;
  MenuLinks: any = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2,
    public router: Router
  ) {
    this.isHandset$ = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      )
      .subscribe(val => (this.isHandset = val));
    this.PrepareMenuLinks();
  }

  CloseSplitPane(IsOpen: any) {
    // this.isHandset && this.sideNav.close();
  }

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
          }
        ]
      }
    ];
  }

  onClick(event: any) {
    console.log(event);

    // this.renderer.addClass(event.attributes.id, "active");
  }

  NavigateToPage(PageURL: any) {
    this.router.navigateByUrl(PageURL);
  }
}
