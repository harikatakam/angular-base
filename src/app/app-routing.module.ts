import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserCreationComponent } from './user-creation/user-creation.component';

const routes: Routes = [
  {path : ' ', redirectTo: 'Dashboard'},
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'User', component: UserCreationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
