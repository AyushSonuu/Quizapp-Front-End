import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

const token_header = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private login:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //add the JWT token to every request 
    let req=request;
    const token = this.login.getToken();
    console.log('Inside Interceptor');
    if(token!=null){
      req=req.clone({
        setHeaders: {Authorization:`Bearer ${token}`}
      })
    }
    return next.handle(req); 
  }
}

export const authInterceptorProviders=[
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }
]