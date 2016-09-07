import { Component, OnInit } from '@angular/core';

import { Step } from './step.data';
import { Item } from './item.data';
import { TemplateService } from './template.service';
import { StepComponent } from './step.component';

@Component({
  selector: 'create',
  template: require('./create.template.html'),
  directives: [StepComponent],
  providers: [TemplateService]
})
export class CreateComponent implements OnInit {
  StepList: Step[];

  constructor(private _templateService: TemplateService) { }

  ngOnInit(): void {
    this._templateService.getInitialStepList()
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
    this._templateService.createProjectCheckList(this.StepList);
  }

  return() {
    //return to pervious page
  }
}