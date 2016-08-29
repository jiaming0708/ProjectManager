import { Component } from '@angular/core';

import { Step } from './step.data';

@Component({
  selector: 'create',
  template: require('./create.template.html'),
})
export class CreateComponent {
  StepList: Step[];
  constructor() {
    this.Init();
  }

  private Init() {
    this.StepList = [{
      Title: '專案規劃',
      ItemList: [{
        Title: 'PM 是否已了解合約內容',
        Description: '預計完成日與 KickOff 預計完成日相同',
        PlanDueDay: '',
        State: 'Wait',
        IsNew: false,
        RequireFlag: true
      }, {
          Title: 'kickoff 簡報',
          Description: '',
          PlanDueDay: '',
          State: 'Wait',
          IsNew: false,
          RequireFlag: true
        }, {
          Title: '專案時程計畫表',
          Description: '',
          PlanDueDay: '',
          State: 'Wait',
          IsNew: false,
          RequireFlag: true
        }]
    }, {
        Title: '種子教育訓練',
        ItemList: [{
          Title: '教育訓練計畫(時程、任務)',
          Description: '',
          PlanDueDay: '',
          State: 'Wait',
          IsNew: false,
          RequireFlag: true
        }, {
            Title: '教育訓練簽到單',
            Description: '',
            PlanDueDay: '',
            State: 'Wait',
            IsNew: false,
            RequireFlag: true
          }]
      }];
  }

  addNewItem($event){
    
  }

  disableAllItemState($event){

  }

  deleteItem($event){

  }

  disableItemState($event){

  }
}