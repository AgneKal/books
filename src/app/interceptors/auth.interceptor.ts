import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class authInterceptor implements HttpInterceptor {

  constructor (private authService:AuthService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptorius paleistas");
    if (this.authService.auth!=null){
      let newReq=req.clone({
        params:req.params.append("auth",this.authService.auth.idToken)
      });
      return next.handle(newReq);
    }
    return next.handle(req);
  }
} 