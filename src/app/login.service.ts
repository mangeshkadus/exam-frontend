import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userDetailsSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  userDetails$: Observable<any> = this.userDetailsSubject.asObservable();
  fullname: BehaviorSubject<any> = new BehaviorSubject<any>('');
  email: BehaviorSubject<any> = new BehaviorSubject<any>('');
  phone: BehaviorSubject<any> = new BehaviorSubject<any>('');

  public apiurl : string =  'http://localhost:8080/api/login';
  public apiurl1 : string =  'http://localhost:8080/api/register';
  constructor(private http: HttpClient) { }

  login(payload: any): Observable<any> {
    return this.http.post(this.apiurl, payload);
  }
  register(payload : any):Observable<any> {
    return this.http.post(this.apiurl1, payload);
  }
}
