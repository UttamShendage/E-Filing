import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { GuideComponent } from './guide/guide.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ViewDemoComponent } from './view-demo/view-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';

const routes:Routes=[
  {path:'',component:AboutComponent},
  {path:'guide',component:GuideComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'view-demo',component:ViewDemoComponent}
]

@NgModule({
  declarations: [
    AboutComponent,
    GuideComponent,
    SignUpComponent,
    SignInComponent,
    ViewDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forChild(routes)]
  ]
})
export class DashboardModule { }
