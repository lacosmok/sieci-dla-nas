import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestService} from "../../rest.service";
import {Subject} from "rxjs/Subject";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit, OnDestroy {
  networkSubscription = new Subscription();
  networks = [];
  networksGenerated = false;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.getDashboardData();
    this.networkSubscription = this.restService.networksChanged
      .subscribe(
      (networks) => {
        this.networks = networks['networks'];
        this.networksGenerated = true;
      }
    )

  }

  ngOnDestroy(){
    this.networkSubscription.unsubscribe();
  }

}
