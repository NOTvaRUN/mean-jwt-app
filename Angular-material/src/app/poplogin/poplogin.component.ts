import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { RegistrationService } from "./../services/registration.service";
import { PopregisterComponent } from "./../popregister/popregister.component";
import { Component, OnInit } from "@angular/core";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-poplogin",
  templateUrl: "./poplogin.component.html",
  styleUrls: ["./poplogin.component.css"]
})
export class PoploginComponent implements OnInit {
  constructor(
    private node: RegistrationService,
    public dialogRef: MatDialogRef<RegistrationService>,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  hide = true;
  data: FormGroup;
  ngOnInit(): void {
    this.data = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.data.controls[controlName].hasError(errorName);
  };
  login() {
    this.node.vali(this.data.value).subscribe(
      res => {
        localStorage.setItem("token", res);
        this.dialogRef.close();
        this.router.navigate(["/home"]);
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          const errorMessages = new Array<{
            propName: string;
            errors: string;
          }>();

          if (err.status === 401) {
            this._snackBar.open("username something", "something else", {
              duration: 2000
            });
          }
          if (err.status == 406) {
            this._snackBar.open("password something", "something else", {
              duration: 2000
            });
          }
        }
      }
    );
  }
  close() {
    this.dialogRef.close();
  }
}
