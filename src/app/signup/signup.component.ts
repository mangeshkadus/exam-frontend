// signup.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private loginservice: LoginService) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      gender: ['', Validators.required]
    });
  }

  passwordMatchValidator() {
    const password = this.signupForm.controls['password'].value;
    const confirmPassword = this.signupForm.controls['confirmPassword'].value;
    console.log(password,confirmPassword);
    return password === confirmPassword ? true : false;
  }

  onSubmit() {
    console.log("hello")
      let payload = this.signupForm.value;
     this.loginservice.register(payload).subscribe(res => {
      
     })
  }
}

