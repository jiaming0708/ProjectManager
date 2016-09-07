import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Item } from './item.data';
import { StateType } from '../stateType.enum';

@Component({
  selector: 'stepItem',
  template: require('./item.template.html'),
})

export class ItemComponent implements OnInit {
  @Input('data') item: Item;
  @Output() delete = new EventEmitter();
  StateType = StateType;

  ngOnInit() {
    this.item.Checked = this.item.State !== StateType.None;
  }

  deleteItem() {
    this.delete.emit(this.item);
  }

  toggleItemState() {
    if (this.item.Checked) {
      this.changeState(StateType.WaitStart);
    }
    else {
      this.changeState(StateType.None);
    }
  }

  private changeState(type: StateType) {
    this.item.State = type;
  }

  chnagePlanDueDay() {
    //若有輸入日期，則一定要查核
    if (this.item.PlanDueDay) {
      this.item.Checked = true;
      this.toggleItemState();
    }
  }
}