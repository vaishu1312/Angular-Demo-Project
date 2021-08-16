import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit,OnDestroy{
  form:FormGroup=new FormGroup({});

  constructor() {
    console.log("In auth constructor");
   }

  ngOnInit(): void {
    this.form=new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(4)]),
    })
    console.log("In ngoninit auth")
  }

  ngOnDestroy():void{
    console.log("In ngondestroy auth")
  }

  onLogin(){
    console.log(this.form)
    if(this.form.invalid){
      alert("Please fill in all the fields")
      return;      
    }
    const email=this.form.value.email;
    const password=this.form.value.password;
    console.log("In login: "+email+" "+password);
  }

  onSignUp(){
    console.log("In signup: ");
  }

}
