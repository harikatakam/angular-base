import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

@Output()  toggleMenu = new EventEmitter();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(public router: Router, private breakpointObserver: BreakpointObserver, private userService: UserService) {
  }

  ngOnInit() {
  }

  ToggleSideMenu() {
     this.toggleMenu.emit();
  }

  logout() {
this.userService.logout();
this.router.navigateByUrl('/login');
  }

}
