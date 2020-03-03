import { TokenInterceptorService } from "./services/token-interceptor.service";
import { AuthguardService } from "./services/authguard.service";
import { AuthService } from "./services/auth.service";
import { MaterialModule } from "./module/material.module";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainComponent } from "./main/main.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { PopregisterComponent } from "./popregister/popregister.component";
import { PoploginComponent } from "./poplogin/poplogin.component";
import { CrudComponent } from './crud/crud.component';
import { PopaddComponent } from './popadd/popadd.component';
import { PopeditComponent } from './popedit/popedit.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    HomeComponent,
    PopregisterComponent,
    PoploginComponent,
    CrudComponent,
    PopaddComponent,
    PopeditComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthguardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
