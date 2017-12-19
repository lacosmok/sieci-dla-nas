import { Component, OnInit } from '@angular/core';
import {RestService} from "../../../../rest.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-first-network',
  templateUrl: './first-network.component.html',
  styleUrls: ['./first-network.component.less']
})
export class FirstNetworkComponent implements OnInit {
  NetworkSubscription = new Subscription();
  isExample1Finished = false;
  isExperimentFinished = false;
  experimentResult;
  example1Result;
  customNetwork = false;
  data;
  result;
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.NetworkSubscription = this.restService.networkData.subscribe(
      (result) => {
        console.log(result['result']);
        if (this.customNetwork){
          this.isExperimentFinished = true;
          this.experimentResult = result['result'];
        } else {
          this.isExample1Finished = true;
          this.example1Result = result['result'];
        }
      }
    )

  }

  startExample1(){
    let data = {
      matrixX: [[0, 0, 1], [1, 1, 1], [1, 0, 1], [0, 1, 1]],
      result: [0, 1, 1, 0],
      runtime: 10000
    };
    this.restService.sendNetwork(data, '/tutorial/create/network')
  }
  startExperiment(x1,x2,x3,y1,y2,y3,z1,z2,z3,a1,a2,a3,res1,res2,res3, res4){
    x1 = Number(x1);x2 = Number(x2);x3 = Number(x3);
    y1 = Number(y1);y2 = Number(y2);y3 = Number(y3);
    z1 = Number(z1);z2 = Number(z2);z3 = Number(z3);
    a1 = Number(a1);a2 = Number(a2);a3 = Number(a3);
    res1 = Number(res1);res2 = Number(res2);res3 = Number(res3); res4 = Number( res4);
    let data = {
      matrixX: [[x1, x2, x3], [y1, y2, y3], [z1, z2, z3], [a1, a2, a3]],
      result: [res1, res2, res3, res4],
      runtime: 10000
    };
    this.customNetwork = true;
    this.data = data;
    this.restService.sendNetwork(data, '/tutorial/create/network')
  }

}
