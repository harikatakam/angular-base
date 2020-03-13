import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppRootComponent } from "./component/app-root/app-root.component";
import { LoginComponent } from "./component/login/login.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { UserCreationComponent } from "./component/user-creation/user-creation.component";
import { AuthGuard } from "./Services/auth.guard";
import { UserDetailsComponent } from "./component/user-details/user-details.component";
import { ChangePasswordComponent } from "./component/change-password/change-password.component";
import { UserManagementComponent } from "./component/user-management/user-management.component";
import { KYCApprovalComponent } from "./component/kyc-approval/kyc-approval.component";
import { ApproveKYCComponent } from "./component/approve-kyc/approve-kyc.component";
import { CreatRequestComponent } from "./component/create-request/create-request.component";

const routes: Routes = [
  {
    path: "",
    component: AppRootComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "Dashboard", component: DashboardComponent },
      { path: "User", component: UserCreationComponent },
      { path: "UserDetails", component: UserDetailsComponent },
      { path: "changePassword", component: ChangePasswordComponent },
      { path: "manageUsers", component: UserManagementComponent },
      { path: "kycApproval", component: KYCApprovalComponent },
      { path: "approveKyc/:id", component: ApproveKYCComponent },
      { path: "request", component: CreatRequestComponent }
    ]
  },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
