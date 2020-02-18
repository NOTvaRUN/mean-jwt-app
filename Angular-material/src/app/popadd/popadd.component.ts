import { RegistrationService } from "./../services/registration.service";
import { CrudService } from "./../crud/crud.service";
import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-popadd",
  templateUrl: "./popadd.component.html",
  styleUrls: ["./popadd.component.css"]
})
export class PopaddComponent implements OnInit {
  constructor(
    private node: CrudService,
    private router: Router,
    public dialogRef: MatDialogRef<CrudService>
  ) {}
  hide = true;
  data: FormGroup;

  ngOnInit() {
    this.data = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10)
      ]),
      password: new FormControl("", [Validators.required])
    });
  }

  register() {
    this.node.reg(this.data.value).subscribe(
      res => {
        this.router.navigate(["/crud"]);
        this.dialogRef.close();
      },
      err => console.log(err)
    );
  }

  close() {
    this.dialogRef.close();
  }
}
