import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Http, RequestOptions, Response} from "@angular/http";
import {environment} from "../environments/environment";

@Injectable()
export class RestService {
  networks: {};
  networksChanged = new Subject<{}>();

  constructor(public http: Http) {
  }

  getDashboardData() {
    const link = 'http://' + environment.baseServer + '/network/all/';
    console.log(link);
    this.http.get(link)
      .subscribe((response: Response) => {
        const data = response.json();
        console.log(data);
        this.networks = data;
        this.networksChanged.next(this.networks);
      });
  }

  sendData(data, url: string) {
    const link = 'http://' + environment.baseServer + url;
    console.log("Send Data ", data, link);
    this.http.post(link, data)
      .subscribe(
        (response: Response) => {
          this.getDashboardData();
        });
  }


}
