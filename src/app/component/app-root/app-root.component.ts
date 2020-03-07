import { Component, ViewChild, Renderer2, ElementRef } from "@angular/core";
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
  private active: ElementRef;

  constructor(private renderer: Renderer2) {}

  CloseSplitPane(event: any) {
    console.log(event);
  }
}
