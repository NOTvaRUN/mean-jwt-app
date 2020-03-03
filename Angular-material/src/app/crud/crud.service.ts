import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "./model";

@Injectable({
  providedIn: "root"
})
export class CrudService {
  constructor(private http: HttpClient) {}
  baseurl = "http://localhost:420";

  getdata() {
    return this.http.get<any>(`${this.baseurl}/get`);
  }
  reg(data) {
    return this.http.post<any>(`${this.baseurl}/create`, data);
  }
  delete(data) {
    return this.http.delete<any>(`${this.baseurl}/delete/${data}`);
  }
  upsy(data) {
    return this.http.put<any>(`${this.baseurl}/update/`, data);
  }
}
