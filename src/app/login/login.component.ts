// login.component.ts

import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl,} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  constructor( private router:Router , private loginservice: LoginService) { }
 
  ngOnInit(): void {
  }

  hello() {
    this.router.navigate(['/register']);
  }
  onSubmit() {
    if (this.loginform.valid) {
      const payload = this.loginform.value;
      this.loginservice.login(payload).subscribe(
        (res: any) => {
            // Assuming the response is now in JSON format
            const responseBody = res.body; // Access the body of the response
            
            if (responseBody ) {
               alert("failed");
            } else {
                this.loginservice.fullname.next(res.fullName);
                this.loginservice.email.next(res.email);
                this.loginservice.phone.next(res.phone);
                this.router.navigate(['/welcome']);
                
                console.error('Login failed:', res.fullName,res.email,res.phone);

            }
        },
        (error: any) => {
          this.router.navigate(['/welcome']);
        }
    );
    
    
    }
  }
}
