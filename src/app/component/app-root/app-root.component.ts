import { Component, ViewChild, Renderer2, ElementRef } from "@angular/core";

@Component({
  selector: "app-app-root",
  templateUrl: "./app-root.component.html",
  styleUrls: ["./app-root.component.scss"]
})
export class AppRootComponent {
  showMenu = false;
  constructor(private renderer: Renderer2) {}

  ToggleSidePane() {
    this.showMenu = !this.showMenu;
  }
}
