import { RegistrationService } from "./registration.service";
import { AuthService } from "./auth.service";
import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TokenInterceptorService implements HttpInterceptor {
  intercept(req, next) {
    let authservice = this.injector.get(RegistrationService);
    let tokenteq = req.clone({
      headers: req.headers.set(
        "Authorization",
        "bearer" + authservice.getToken()
      )
    });
    return next.handle(tokenteq);
  }

  constructor(private injector: Injector) {}
}
