import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Agent } from "http";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  url = "http://localhost:3000/post";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  post(form: NgForm) {
    this.http.post<any>(`${this.url}`, form).subscribe(data => {
      console.log(data);
    });
  }
}
