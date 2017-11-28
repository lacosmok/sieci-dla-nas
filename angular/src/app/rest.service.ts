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

  getDashboardData(id?: string) {
    this.http.get(environment.baseServer + '/dashboard/network/all')
      .subscribe((response: Response) => {
        const data = response.json();
        console.log(data);
        this.networks = data;
        this.networksChanged.next(this.networks);
      });
  }


}
