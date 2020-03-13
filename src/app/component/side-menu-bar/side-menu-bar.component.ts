import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter
} from "@angular/core";
import { Router } from "@angular/router";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { UserService } from "src/app/Services/user.service";

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
  currentUser: any;

  constructor(public router: Router, public userSrvc: UserService) {
    this.SubscribeCurrentUserData();
  }

  ngOnInit() {
    this.PrepareMenuLinks();
  }

  SubscribeCurrentUserData() {
    this.userSrvc.loggedInUserUpdated$.subscribe((user: any) => {
      this.currentUser = user;
    });
  }

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
      },
      {
        Icon: "people",
        title: "Requests",
        SubMenu: [
          {
            title: "New Request",
            PageUrl: "request"
          }
        ]
      }
    ];
    const IsAdmin: any = this.currentUser.roles[0] === 1 ? true : false;
    if (IsAdmin) {
      this.MenuLinks.push({
        Icon: "description",
        title: "KYC Approval",
        PageUrl: "kycApproval"
      });
    }
  }

  OpenPanel(index: number) {
    this.OpenSubMenu[index] = !this.OpenSubMenu[index];
  }

  NavigateToPage(PageURL: any) {
    this.router.navigateByUrl(PageURL);
    this.toggleMenu.emit();
  }
}
