import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppRootComponent } from "./component/app-root/app-root.component";
import { LoginComponent } from "./component/login/login.component";
import { AuthGuard } from "./Services/auth.guard";
import { ChangePasswordComponent } from "./component/change-password/change-password.component";

const routes: Routes = [
  {
    path: "",
    component: AppRootComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "changePassword", component: ChangePasswordComponent },
    ]
  },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
