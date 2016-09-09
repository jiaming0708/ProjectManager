import { Component, OnInit } from '@angular/core';

import { Step } from '../data/step.data';
import { Item } from '../data/item.data';
import { StepService } from '../data/step.service';

@Component({
  selector: 'dashboard',
  template: require('./dashboard.template.html'),
  providers: [StepService]
})
export class DashBoardComponent implements OnInit {
  StepList: Step[];

  constructor(private _stepService: StepService) { }

  ngOnInit(): void {
    this._stepService.getInitialStepList()
      .then(data => this.StepList = data);
  }
}