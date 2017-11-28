import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {RestService} from "../../rest.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  networkSubs: Subscription
  networks = [];
  baner: string;
  name: string;
  age: number;
  email: string;
  address: Address;
  siecies: string[];

  constructor(public restService: RestService) {
    console.log('constructor ran...');
  }

  ngOnInit() {
    this.restService.getDashboardData();
    this.networkSubs = this.restService.networksChanged
      .subscribe(
        (networks) => {
          this.networks = networks['networks'];
          console.log(networks);
        });
    console.log('ngOnInit ran...');


    this.baner = 'Sieci dla nas, Witaj na stronie glownej';
    this.name = 'named by ngOniit';
    this.age = 30;
    this.address = {
      street: 'testStreet',
      city: 'testCity',
      country: 'testCountry'
    };
    this.siecies = [
      'siec1ex',
      'siec2ex',
      'siec3ex',
      'siec4ex',
      'siec5ex',
      'siec6ex',
      'siec7ex',
      'siec8ex',
    ];
  }

  deleteNetwork(pk) {
    const link = '/network/delete';
    this.restService.sendData( {'pk': pk}, link);
  }
  addNetwork(name) {
    const link = '/network/add';
    this.restService.sendData( {'name': name.value}, link);
  }

  onClick() {
    console.log('button_login');
    this.baner = 'Witaj ' +  this.name;
    }

  addSiec(siec) {
    console.log('siec ' + siec + ' added.');
    this.siecies.unshift(siec);
    return false;
  }

  deleteSiec(siec) {
    console.log('removed');
    for (let i = 0; i < this.siecies.length; i++) {
      if (this.siecies[i] === siec) {
        this.siecies.splice(i, 1);
      }
    }
  }
}


interface Address {
  street: string;
  city: string;
  country: string;
}
