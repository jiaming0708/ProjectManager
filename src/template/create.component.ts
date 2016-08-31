import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Step } from './step.data';
import { Item } from './item.data';
import { StateType } from '../StateType.enum';

@Component({
  selector: 'create',
  template: require('./create.template.html'),
  directives: [MODAL_DIRECTIVES]
})
export class CreateComponent {
  @ViewChild('addItemModal') modal: ModalComponent;
  StepList: Step[];
  NewItem: Item;
  SelectedStep: Step;
  StateType = StateType;

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
        State: StateType.WaitStart,
        IsNew: false,
        RequireFlag: true
      }, {
          Title: 'kickoff 簡報',
          Description: '',
          PlanDueDay: '',
          State: StateType.WaitStart,
          IsNew: false,
          RequireFlag: true
        }, {
          Title: '專案時程計畫表',
          Description: '',
          PlanDueDay: '',
          State: StateType.WaitStart,
          IsNew: false,
          RequireFlag: true
        }]
    }, {
        Title: '種子教育訓練',
        ItemList: [{
          Title: '教育訓練計畫(時程、任務)',
          Description: '',
          PlanDueDay: '',
          State: StateType.WaitStart,
          IsNew: false,
          RequireFlag: true
        }, {
            Title: '教育訓練簽到單',
            Description: '',
            PlanDueDay: '',
            State: StateType.WaitStart,
            IsNew: false,
            RequireFlag: true
          }]
      }];

    this.NewItem = {
      Title: '',
      Description: '',
      PlanDueDay: '',
      State: StateType.WaitStart,
      IsNew: true,
      RequireFlag: false
    };
  }

  disableAllItemState(step: Step) {
    step.ItemList.forEach(item => item.State = StateType.None);
  }

  deleteItem(step: Step, item: Item) {
    var index = step.ItemList.indexOf(item);
    step.ItemList.splice(index, 1);
  }

  disableItemState(item: Item) {
    item.State = StateType.None;
  }

  enableItemState(item: Item) {
    item.State = StateType.WaitStart;
  }

  addNewItem(step: Step) {
    this.SelectedStep = step;
    this.NewItem = {
      Title: '',
      Description: '',
      PlanDueDay: '',
      State: StateType.WaitStart,
      IsNew: true,
      RequireFlag: false
    };
    this.modal.open();
  }

  closedNewItem() {
    this.SelectedStep.ItemList.push(this.NewItem);
  }
}