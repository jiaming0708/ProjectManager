import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Step } from '../data/step.data';
import { StepService } from '../data/step.service';
import { StepComponent } from './step.component';

@Component({
  selector: 'create',
  template: require('./create.template.html'),
  directives: [StepComponent],
  providers: [StepService]
})
export class CreateComponent implements OnInit, OnDestroy {
  StepList: Step[];
  private Id: number;
  private sub: Subscription;

  constructor(private _stepService: StepService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.Id = +params['id']; // (+) converts string 'id' to a number
    });

    this._stepService.getInitialStepList()
      .subscribe(data => {
        this.StepList = data;
      },
      err => {
        alert(err);
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

  create() {
    //do transaction
    this._stepService.createProjectCheckList(this.Id, this.StepList)
      .subscribe(p => {
        this.return();
      },
      err => {
        alert(err);
      });
  }

  return() {
    //return to pervious page
    window.location.href = "Project/ProjectList";
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}