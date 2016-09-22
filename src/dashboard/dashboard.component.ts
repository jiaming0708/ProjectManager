import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Step } from '../data/step.data';
import { Item } from '../data/item.data';
import { StepService } from '../data/step.service';
import { StateType } from '../data/stateType.enum';

@Component({
  selector: 'dashboard',
  template: require('./dashboard.template.html'),
  providers: [StepService]
})
export class DashBoardComponent implements OnInit, OnDestroy {
  StepList: Step[];
  private sub: Subscription;
  StateType = StateType;

  constructor(private _stepService: StepService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this._stepService.getStepListByProjectId(id)
        .then(data => this.StepList = data);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  changeState(item: Item) {
    this._stepService.changeItemState(item);
  }

  extendItem(item: Item) {
    this._stepService.extendItem(item, "");
  }

  checkItem(item: Item) {
    this._stepService.checkItem(item);
  }

  updateItemFilePath(item: Item) {
    this._stepService.updateItemFilePath(item);
  }
}