import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiService} from './api.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  private SESSION_TOKEN = this.apiService.SESSION_TOKEN;

  constructor(private apiService: ApiService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.apiService.isUserLoggedIn()) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'X-Requested-With': 'XMLHttpRequest',
          Authorization: `Basic ${window.btoa(sessionStorage.getItem(this.SESSION_TOKEN))}`
        })
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
