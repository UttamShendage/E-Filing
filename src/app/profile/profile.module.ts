import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { SignOffComponent } from './sign-off/sign-off.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:ShowProfileComponent},
  {path:'change',component:ChangePassComponent},
  {path:'signoff',component:SignOffComponent}

]

@NgModule({
  declarations: [
    ShowProfileComponent,
    ChangePassComponent,
    SignOffComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forChild(routes)]
  ]
})
export class ProfileModule { }
