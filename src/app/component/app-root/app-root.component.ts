import { Component, Renderer2 } from "@angular/core";
import { UserService } from "src/app/Services/user.service";

@Component({
  selector: "app-app-root",
  templateUrl: "./app-root.component.html",
  styleUrls: ["./app-root.component.scss"]
})
export class AppRootComponent {
  showMenu = false;
  currentUser;
  constructor(private renderer: Renderer2, public userService: UserService) {
    this.SubscribeCurrentUserData();
  }

  ToggleSidePane() {
    this.showMenu = !this.showMenu;
  }

  SubscribeCurrentUserData() {
    this.userService.loggedInUserUpdated$.subscribe(
      user => (this.currentUser = user)
    );
  }
}
