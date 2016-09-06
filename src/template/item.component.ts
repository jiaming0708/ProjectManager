import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from './item.data';
import { StateType } from '../stateType.enum';

@Component({
  selector: 'stepItem',
  template: require('./item.template.html'),
})

export class ItemComponent {
  @Input('data') item: Item;
  @Output() delete = new EventEmitter();
  StateType = StateType;

  deleteItem() {
    this.delete.emit(this.item);
  }
 
  disableItemState() {
    this.changeState(StateType.None);
  }

  enableItemState() {
    this.changeState(StateType.WaitStart);
  }

  private changeState(type:StateType){
    this.item.State = type;
  }
}