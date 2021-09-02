import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { PaymentComponent } from './payment/payment.component';
import { NotificationComponent } from './notification/notification.component';
import { CreateCaseComponent } from './create-case/create-case.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { FileCaseComponent } from './file-case/file-case.component';
import { AttorneyComponent } from './attorney/attorney.component';
//import { RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'',component:RegistrationComponent},
  {path:'payment',component:PaymentComponent},
  {path:'notif',component:NotificationComponent},
  {path:'create',component:CreateCaseComponent},
  {path:'search',component:FileCaseComponent},
  {path:'attorney',component:AttorneyComponent}
]

@NgModule({
  declarations: [
    RegistrationComponent,
    PaymentComponent,
    NotificationComponent,
    CreateCaseComponent,
    SearchComponent,
    FileCaseComponent,
    AttorneyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forChild(routes)]
  ]
})
export class CaseModule { }
