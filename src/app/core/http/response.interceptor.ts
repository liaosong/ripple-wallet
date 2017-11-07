import { Injectable } from '@angular/core'
import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router'


@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .map((event: HttpEvent<any>) => {

        return event
      })
      .catch(err => {
        let errMessage = err
        if (err instanceof HttpErrorResponse) {
          errMessage = err.statusText
          if (err.status === 401) {
            this.router.navigate(['entrance'])
          }
        }

        return Observable.throw(errMessage)
      })
  }
}
