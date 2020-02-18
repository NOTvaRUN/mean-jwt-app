import { Router, CanActivate } from "@angular/router";
import { RegistrationService } from "./registration.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthguardService implements CanActivate {
  constructor(private auth: RegistrationService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      this.router.navigate(["/poplogin"]);
      return false;
    }
  }
}
