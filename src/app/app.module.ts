import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  MatSidenavModule,
  MatSidenavContent,
  MatSidenav
} from "@angular/material/sidenav";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatToolbarModule } from "@angular/material/toolbar";
import { LayoutModule } from "@angular/cdk/layout";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from "./component/home/home.component";
import { AppRootComponent } from "./component/app-root/app-root.component";
import { LoginComponent } from "./component/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SideMenuBarComponent } from "./component/side-menu-bar/side-menu-bar.component";
import { HeaderComponent } from "./component/header/header.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { UserCreationComponent } from "./component/user-creation/user-creation.component";
import { MdePopoverModule } from "@material-extended/mde";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS
} from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { AgGridModule } from "ag-grid-angular";
import { TokenInjectorInterceptor } from "./Services/token-injector.interceptor";
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher
} from "@angular/material/core";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppRootComponent,
    LoginComponent,
    SideMenuBarComponent,
    HeaderComponent,
    DashboardComponent,
    UserCreationComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MdePopoverModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    AgGridModule.withComponents([])
    // MatSidenavContent,
    // MatSidenav
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInjectorInterceptor,
      multi: true
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" }
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
