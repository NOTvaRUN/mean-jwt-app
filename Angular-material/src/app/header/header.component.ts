import { RegistrationService } from "./../services/registration.service";
import { Router } from "@angular/router";

import { PoploginComponent } from "./../poplogin/poplogin.component";
import { PopregisterComponent } from "./../popregister/popregister.component";
import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    public reg: RegistrationService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {}

  register(): void {
    const dialogRef = this.dialog.open(PopregisterComponent, {
      width: "550px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  login(): void {
    const dialogRef = this.dialog.open(PoploginComponent, {
      width: "550px"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
