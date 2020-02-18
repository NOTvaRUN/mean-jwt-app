import { RegistrationService } from "./../services/registration.service";
import { Component, OnInit, Inject } from "@angular/core";
import {
  NgForm,
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from "@angular/forms";
import { Router } from "@angular/router";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: "app-popregister",
  templateUrl: "./popregister.component.html",
  styleUrls: ["./popregister.component.css"]
})
export class PopregisterComponent implements OnInit {
  constructor(
    private node: RegistrationService,
    private router: Router,
    public dialogRef: MatDialogRef<RegistrationService>
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

  public hasError = (controlName: string, errorName: string) => {
    return this.data.controls[controlName].hasError(errorName);
  };

  register() {
    this.node.register(this.data.value).subscribe(
      res => {
        localStorage.setItem("token", res);
        this.dialogRef.close();
        this.router.navigate(["/home"]);
      },
      err => console.log(err)
    );
  }

  close() {
    this.dialogRef.close();
  }
}
