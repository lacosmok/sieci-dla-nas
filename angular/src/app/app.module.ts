import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RestService } from './rest.service';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { NetworksComponent } from './networks/networks.component';
import { NetworkListComponent } from './networks/network-list/network-list.component';
import { NetworkItemComponent } from './networks/network-list/network-item/network-item.component';
import { NetworkDetailsComponent } from './networks/network-details/network-details.component';
import {AlertModule} from 'ngx-bootstrap';

import {Routes, RouterModule, PreloadAllModules, NoPreloading} from '@angular/router';
import {TutorialComponent} from "./components/tutorial/tutorial.component";
import { ContentsTableComponent } from './components/tutorial/contents-table/contents-table.component';
import { IntroductionComponent } from './components/tutorial/contents-table/introduction/introduction.component';
import { BegginingComponent } from './components/tutorial/contents-table/beggining/beggining.component';
import { FirstNetworkComponent } from './components/tutorial/contents-table/first-network/first-network.component';
import { HistoryComponent } from './components/history/history.component';

const appRoutes: Routes = [

  { path: '', component: UserComponent},
  { path: 'tutorial', component: TutorialComponent},
  { path: 'historia', component: HistoryComponent},
  { path: '**', redirectTo: 'tutorial'},
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    NetworksComponent,
    NetworkListComponent,
    NetworkItemComponent,
    NetworkDetailsComponent,
    TutorialComponent,
    ContentsTableComponent,
    IntroductionComponent,
    BegginingComponent,
    FirstNetworkComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes, {preloadingStrategy: NoPreloading, useHash: true}),
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})

export class AppModule { }
