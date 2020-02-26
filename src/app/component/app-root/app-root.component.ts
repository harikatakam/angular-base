import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss']
})
export class AppRootComponent {
  title = 'InsApp';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  MenuLinks: any = [];

  OpenSubMenu: boolean[] = [];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.PrepareMenuLinks();
  }

  PrepareMenuLinks() {
    this.MenuLinks = [
      {
        Icon: 'home',
        title: 'HomePage',
        PageUrl: 'Home',
        SubMenu: [
          {
            title: 'Grids',
            PageUrl: 'Grid',
          },
          {
            title: 'Charts',
            PageUrl: 'Chart',
          },
        ]
      },
      {
        Icon: 'donut_small',
        title: 'TestPage',
        PageUrl: 'Test',
      }
    ];
  }

  OpenPanel(index: number) {
    this.OpenSubMenu[index] = !this.OpenSubMenu[index];
  }
}
