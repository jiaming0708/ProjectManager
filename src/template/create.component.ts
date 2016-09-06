import { Component, ViewChild, animate, transition, trigger, state, style, OnInit } from '@angular/core';

import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Step } from './step.data';
import { Item } from './item.data';
import { StateType } from '../StateType.enum';
import { TemplateService } from './template.service';

@Component({
  selector: 'create',
  template: require('./create.template.html'),
  directives: [MODAL_DIRECTIVES],
  providers: [TemplateService],
  animations: [
    trigger('stepSelected', [
      state('false', style({
        'max-height': 0,
        opacity: 0,
        transform: 'translate(0, 50%)',
        padding: 0
      })),
      state('true', style({
        opacity: 1,
        transform: 'translate(0, 0)'
      }))
    ])
  ]
})
export class CreateComponent implements OnInit {
  @ViewChild('addItemModal') modal: ModalComponent;
  StepList: Step[];
  NewItem: Item;
  SelectedStep: Step;
  StateType = StateType;

  constructor(private _templateService: TemplateService) { }

  ngOnInit(): void {
    this._templateService.getInitialStepList()
      .then(data => this.StepList = data);

    this.NewItem = this._templateService.getEmptyItem();
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
    this.NewItem = this._templateService.getEmptyItem();
    this.modal.open();
  }

  closedNewItem() {
    this.SelectedStep.ItemList.push(this.NewItem);
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