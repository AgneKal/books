import { EventEmitter, Injectable } from '@angular/core';
import { AuthResponseData } from '../models/authResponseData';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  public auth: AuthResponseData | null = null;
  public isLoggedIn = false;
  public onUserStatusChange = new EventEmitter<boolean>();

  constructor(private http:HttpClient, private router: Router) {

  }

  public register(email: string, password: string, newUser:boolean) {
    let method = (newUser) ? 'signUp' : 'signInWithPassword';
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:${method}?key=AIzaSyA5dPvr86KKecN13dqWymSkUYKVrOayq5A`, {
      email: email,
      password: password,
      returnSecureToken: true,
    }).pipe(tap((response) => {
      this.auth = response;
      this.isLoggedIn=true;
      localStorage.setItem("user", JSON.stringify(this.auth));
      this.onUserStatusChange.emit(true);
    }));
  }

  public autoLogin(){
    let user=localStorage.getItem("user");
    if (user!=null){
        this.auth= JSON.parse(user);
        this.isLoggedIn=true;
        this.onUserStatusChange.emit(true);
    }

  }

  public logout() {
    this.isLoggedIn = false;
    this.auth = null;
    localStorage.removeItem("user");
    this.onUserStatusChange.emit(false);
    this.router.navigate(['/']);
  }
}
