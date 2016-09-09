import { Component, OnInit } from '@angular/core';

import { Step } from '../data/step.data';
import { StepService } from '../data/step.service';
import { StepComponent } from './step.component';

@Component({
  selector: 'create',
  template: require('./create.template.html'),
  directives: [StepComponent],
  providers: [StepService]
})
export class CreateComponent implements OnInit {
  StepList: Step[];

  constructor(private _stepService: StepService) { }

  ngOnInit(): void {
    this._stepService.getInitialStepList()
      .then(data => this.StepList = data);
  }

  showStep(step: Step) {
    if (step.SelectedFlag) {
      return;
    }
    //according
    this.StepList.forEach(p => p.SelectedFlag = false);
    step.SelectedFlag = true;
  }

  create() {
    //do transaction
    this._stepService.createProjectCheckList(this.StepList);
  }

  return() {
    //return to pervious page
  }
}