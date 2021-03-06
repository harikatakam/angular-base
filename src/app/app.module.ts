import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { MatWrapperModule } from "./material-wrapper.module";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRootComponent } from "./component/app-root/app-root.component";
import { LoginComponent } from "./component/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SideMenuBarComponent } from "./component/side-menu-bar/side-menu-bar.component";
import { HeaderComponent } from "./component/header/header.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { UserCreationComponent } from "./component/user-creation/user-creation.component";
import { AgGridModule } from "ag-grid-angular";
import { TokenInjectorInterceptor } from "./Services/token-injector.interceptor";
import { ChangePasswordComponent } from "./component/change-password/change-password.component";
import { PrimeNgWrapperModule } from "./prime-ng-wrapper.module";
import { UserManagementComponent } from "./component/user-management/user-management.component";
import { KYCApprovalComponent } from "./component/kyc-approval/kyc-approval.component";
import { UserDetailsComponent } from "./component/user-details/user-details.component";
import { ApproveKYCComponent } from "./component/approve-kyc/approve-kyc.component";
import { CreatRequestComponent } from "./component/create-request/create-request.component";

import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { RequestListComponent } from "./component/request-list/request-list.component";
import { ReLoginComponent } from "./component/re-login/re-login.component";

@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordComponent,
    AppRootComponent,
    LoginComponent,
    SideMenuBarComponent,
    HeaderComponent,
    DashboardComponent,
    UserCreationComponent,
    UserDetailsComponent,
    UserManagementComponent,
    KYCApprovalComponent,
    ApproveKYCComponent,
    CreatRequestComponent,
    RequestListComponent,
    ReLoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    MatWrapperModule,
    PrimeNgWrapperModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInjectorInterceptor,
      multi: true
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
