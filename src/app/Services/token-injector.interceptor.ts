import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInjectorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userToken = localStorage.getItem("UserToken");

    if (userToken) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + userToken)
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
