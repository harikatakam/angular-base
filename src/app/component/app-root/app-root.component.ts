import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss']
})
export class AppRootComponent {
  title = 'InsApp';
  @ViewChild('sidenav') sideNav : MatSidenav;
  isHandset = false;
  isHandset$;

  OpenSubMenu: boolean[] = [];

  IsSplitPane = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    ).subscribe(val => this.isHandset = val);

  }

  CloseSplitPane(IsOpen: any) {

    this.isHandset && this.sideNav.close();
  }
}
