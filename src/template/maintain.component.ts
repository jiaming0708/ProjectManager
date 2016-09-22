import { Component, OnInit } from '@angular/core';

import { Step } from '../data/step.data';
import { StepService } from '../data/step.service';
import { StepComponent } from './step.component';

@Component({
  selector: 'maintain',
  template: require('./maintain.template.html'),
  directives: [StepComponent],
  providers: [StepService]
})
export class MaintainComponent implements OnInit {
  StepList: Step[];

  constructor(private _stepService: StepService) { }

  ngOnInit(): void {
    this._stepService.getInitialStepList()
      .then(data => {
        if (!data.Result) {
          alert(data.ErrorMessage);
          return;
        }
        this.StepList = data.StepList;
      });
  }

  showStep(step: Step) {
    if (step.SelectedFlag) {
      return;
    }
    //according
    this.StepList.forEach(p => p.SelectedFlag = false);
    step.SelectedFlag = true;
  }

  save() {
    //do transaction
    this._stepService.updateTemplateCheckList(this.StepList)
      .then(data => {
        if (!data.Result) {
          alert(data.ErrorMessage);
          return;
        }
        this.StepList = data.StepList;
      });
  }
}