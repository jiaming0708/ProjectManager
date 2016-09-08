import { Component, Input, Output, EventEmitter, ViewChild, animate, transition, trigger, state, style, OnInit } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Step } from './step.data';
import { Item } from './item.data';
import { StateType } from '../stateType.enum';
import { ItemComponent } from './item.component';
import { TemplateService } from './template.service';

@Component({
  selector: 'step',
  template: require('./step.template.html'),
  directives: [MODAL_DIRECTIVES, ItemComponent],
  providers: [TemplateService],
  animations: [
    trigger('stepSelected', [
      state('false', style({
        'max-height': 0,
        opacity: 0,
        transform: 'translate(0, 50%)',
        padding: 0,
        overflow: 'hidden'
      })),
      state('true', style({
        opacity: 1,
        transform: 'translate(0, 0)'
      }))
    ])
  ]
})

export class StepComponent implements OnInit {
  @ViewChild('addItemModal') modal: ModalComponent;
  @Input() simpleType: boolean = false;
  @Input('data') step: Step;
  @Output() open = new EventEmitter();
  NewItem: Item;

  constructor(private _templateService: TemplateService) { }

  ngOnInit() {
    this.NewItem = this._templateService.getEmptyItem();
  }

  disableAllItemState() {
    this.step.ItemList.forEach(item => { item.State = StateType.None; item.Checked = false; });
  }

  deleteItem(item: Item) {
    var index = this.step.ItemList.indexOf(item);
    this.step.ItemList.splice(index, 1);
  }

  addNewItem() {
    this.NewItem = this._templateService.getEmptyItem();
    this.modal.open();
  }

  closedNewItem() {
    this.step.ItemList.push(this.NewItem);
  }

  showStep() {
    this.open.emit(this.step);
  }
}