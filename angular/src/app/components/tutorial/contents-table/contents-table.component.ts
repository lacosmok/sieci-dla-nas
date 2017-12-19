import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contents-table',
  templateUrl: './contents-table.component.html',
  styleUrls: ['./contents-table.component.less']
})
export class ContentsTableComponent implements OnInit {
  @Output('selectStep') selectStep = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onStepSelect(step){
    this.selectStep.emit(step);
  }
}
