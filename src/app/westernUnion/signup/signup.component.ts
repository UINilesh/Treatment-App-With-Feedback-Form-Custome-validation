import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerform:FormGroup;
  submitted = false;
  getdata=[];
  data:any;
  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.registerform = this.fb.group({
      firstname:[null, Validators.required],
      lastname:[null, Validators.required],
      email:[null, Validators.required],
      password:[null, Validators.required],
      cpassword:[null, Validators.required], 
    })  
  }
  
  get f(){
    return this.registerform.controls;
  }

  submitform() {
    this.submitted = true;
    if (this.registerform.invalid) {
      return;
    } 
     this.getdata.push(this.registerform.value);  
     alert("Data is added Successfully");
     this.registerform.reset();
  }

}
