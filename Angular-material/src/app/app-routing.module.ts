import { PopeditComponent } from "./popedit/popedit.component";
import { PopaddComponent } from "./popadd/popadd.component";
import { CrudComponent } from "./crud/crud.component";
import { AuthguardService } from "./services/authguard.service";
import { PopregisterComponent } from "./popregister/popregister.component";
import { PoploginComponent } from "./poplogin/poplogin.component";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "home", canActivate: [AuthguardService], component: HomeComponent },
  { path: "poplogin", component: PoploginComponent },
  { path: "popregister", component: PopregisterComponent },
  { path: "crud", canActivate: [AuthguardService], component: CrudComponent },
  {
    path: "popadd",
    canActivate: [AuthguardService],
    component: PopaddComponent
  },
  {
    path: "popedit",
    canActivate: [AuthguardService],
    component: PopeditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
