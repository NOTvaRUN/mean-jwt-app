import { CrudService } from "./../crud/crud.service";
import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { ProductModel } from "../crud/model";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-popedit",
  templateUrl: "./popedit.component.html",
  styleUrls: ["./popedit.component.css"]
})
export class PopeditComponent implements OnInit {
  product: ProductModel;
  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private crud: CrudService,
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

  edit() {
    this.crud.upsy(id, this.data.value).subscribe(
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
