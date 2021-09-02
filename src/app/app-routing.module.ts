import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'case',loadChildren:()=>import('./case/case.module').then(m=>m.CaseModule)},
  {path:'profile',loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule)}
];
/* {path:'staff',loadChildren:()=>import('./staff/staff.module').then(m=>m.StaffModule)},
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
