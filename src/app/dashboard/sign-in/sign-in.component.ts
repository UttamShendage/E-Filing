import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormsModule,Reactiveformmodule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
login:any=FormGroup;
//submitted:boolean=false;
state=['washigntan','shikago','nework'];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.login=this.fb.group({
      email:['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }
//getControl(){
  //return this.login.controls;
//}
onsubmit(){
  console.log(this.login.value);
}
}
