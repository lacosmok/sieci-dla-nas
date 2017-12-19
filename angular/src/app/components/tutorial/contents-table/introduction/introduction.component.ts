import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.less']
})
export class IntroductionComponent implements OnInit {
  networksApplication = [
    "Rozpoznawanie wzorców (znaków, liter, kształtów, sygnałów mowy, sygnałów sonarowych)",
    "Klasyfikowanie obiektów",
    "Prognozowanie i ocena ryzyka ekonomicznego",
    "Prognozowanie zmian cen rynkowych (giełdy, waluty)",
    "Ocena zdolności kredytowej podmiotów",
    "Prognozowanie zapotrzebowania na energię elektryczną",
    "Diagnostyka medyczna",
    "Dobór pracowników",
    "Prognozowanie sprzedaży",
    "Aproksymowanie wartości funkcji",
  ]



  constructor() { }

  ngOnInit() {
  }

}
