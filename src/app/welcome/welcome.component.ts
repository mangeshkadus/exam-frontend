import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { AnyBulkWriteOperation } from 'mongodb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  userDetails: any;
  fname:any;
  email:any;
  phone:any;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 120000); 
   this.loginService.fullname.subscribe(fnmae =>{
    this.fname = fnmae;
   });
   this.loginService.email.subscribe(fnmae =>{
    this.email = fnmae;
   });
   this.loginService.phone.subscribe(fnmae =>{
    this.phone = fnmae;
   });
  }

}
