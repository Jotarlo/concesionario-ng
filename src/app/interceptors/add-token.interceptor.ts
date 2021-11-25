import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LocalStorageService } from '../services/shared/local-storage.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*const request = req.clone({
      url: req.url.replace("https://", "http://")
    });*/
    let token = this.localStorageService.GetToken();

    const request = req.clone({
      headers: new HttpHeaders({
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      })
    });
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          console.log("Todo OK");
        },
        (error: HttpErrorResponse) => {
          if(error.status == 401){
            this.router.navigate(["/security/login"]);
          }
        }
      )
    );
  }
}
