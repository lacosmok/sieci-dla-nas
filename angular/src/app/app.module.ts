import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {RestService} from "./rest.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
