import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signup:any=FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signup=this.fb.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      email:['',[Validators.required]]
    })
  }
  submit(){
    console.log(this.signup.value);
  }
}
