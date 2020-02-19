// tslint:disable-next-line: quotemark
import { BrowserModule } from "@angular/platform-browser";
// tslint:disable-next-line: quotemark
import { NgModule } from "@angular/core";
// tslint:disable-next-line: quotemark
import { AppRoutingModule } from "./app-routing.module";
// tslint:disable-next-line: quotemark
import { AppComponent } from "./app.component";
// tslint:disable-next-line: quotemark
import {
  MatSidenavModule,
  MatSidenavContent,
  MatSidenav
  // tslint:disable-next-line: quotemark
} from "@angular/material/sidenav";
// tslint:disable-next-line: quotemark
import { CommonModule } from "@angular/common";
// tslint:disable-next-line: quotemark
import { RouterModule } from "@angular/router";
// tslint:disable-next-line: quotemark
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// tslint:disable-next-line: quotemark
import { MatToolbarModule } from "@angular/material/toolbar";
import { LayoutModule } from "@angular/cdk/layout";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    // FormsModule,
    // ReactiveFormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
    // MatSidenavContent,
    // MatSidenav
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
