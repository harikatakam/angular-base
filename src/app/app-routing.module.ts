import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRootComponent } from './component/app-root/app-root.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserCreationComponent } from './component/user-creation/user-creation.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  { path: '', component: AppRootComponent },  // , canActivate: [AuthGuard]
  { path: 'login', component: LoginComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'User', component: UserCreationComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
