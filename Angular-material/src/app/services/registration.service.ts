import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  url = "http://localhost:420";
  constructor(private http: HttpClient, private router: Router) {}

  register(data) {
    return this.http.post<any>(`${this.url}/register`, data);
  }

  vali(data) {
    return this.http.post<any>(`${this.url}/login`, data);
  }

  getToken() {
    return localStorage.getItem("token");
  }
  loggedIn() {
    return !!localStorage.getItem("token");
  }
  logoutUser() {
    localStorage.removeItem("token");
    this.router.navigate(["/"]);
  }
}
