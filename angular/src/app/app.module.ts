import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RestService } from './rest.service';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { NetworksComponent } from './networks/networks.component';
import { Network } from './networks/network.list/network.list.component';
import { NetworkListComponent } from './networks/network-list/network-list.component';
import { NetworkItemComponent } from './network-list/network-item/network-item.component';
import { NetworkDetailsComponent } from './networks/network-details/network-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    NetworksComponent,
    Network.ListComponent,
    NetworkListComponent,
    NetworkItemComponent,
    NetworkDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})

export class AppModule { }
