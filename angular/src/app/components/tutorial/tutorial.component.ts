import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.less']
})
export class TutorialComponent implements OnInit {
  step = 0;

  constructor() { }

  ngOnInit() {
  }
  onStepSelect(step){
    this.step = step;
  }

}
