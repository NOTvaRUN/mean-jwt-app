import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
const material = [
  CommonModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule
];

@NgModule({
  imports: [material],
  exports: [material],
  declarations: []
})
export class MaterialModule {}
