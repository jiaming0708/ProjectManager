import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Step } from '../data/step.data';
import { StepService } from '../data/step.service';
import { BlockComponent } from './block.component';

@Component({
  selector: 'dashboard',
  template: require('./dashboard.template.html'),
  providers: [StepService],
  directives: [BlockComponent]
})
export class DashBoardComponent implements OnInit, OnDestroy {
  StepList: Step[];
  private sub: Subscription;
  private Id: number;

  constructor(private _stepService: StepService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.Id = +params['id']; // (+) converts string 'id' to a number
      this._stepService.getStepListByProjectId(this.Id)
        .then(data => {
          if (!data.Result) {
            alert(data.ErrorMessage);
            return;
          }
          this.StepList = data.StepList;
        });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  openStepDetail(step: Step) {
    this.StepList.forEach(p => {
      p.SelectedFlag = false;
    });

    step.SelectedFlag = true;
  }
}