import { PopeditComponent } from "./../popedit/popedit.component";
import { PopaddComponent } from "./../popadd/popadd.component";
import { HttpClient } from "@angular/common/http";
import { CrudService } from "./crud.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ProductModel } from "./model";
import { Router } from "@angular/router";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: "app-crud",
  templateUrl: "./crud.component.html",
  styleUrls: ["./crud.component.css"]
})
export class CrudComponent implements OnInit {
  constructor(
    private crud: CrudService,
    private router: Router,
    public dialog: MatDialog
  ) {}
  products = [];
  url = "http://localhost:420";
  ngOnInit() {
    this.crud.getdata().subscribe(res => {
      this.products = res;
      console.log(res);
    });
  }

  delete(data) {
    this.crud.delete(data).subscribe(res => {
      console.log(res);
    });
  }

  pops(): void {
    const dialogRef = this.dialog.open(PopaddComponent, {
      width: "550px"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
  papa(): void {
    const dialogRef = this.dialog.open(PopeditComponent, {
      width: "550px"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
