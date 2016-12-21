import { Component, Input, Output, EventEmitter, animate, transition, trigger, state, style, ViewChild, OnInit } from '@angular/core';
import { ModalComponent, MODAL_DIRECTIVES } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Step } from '../data/step.data';
import { Item } from '../data/item.data';
import { StepService } from '../data/step.service';
import { StateType } from '../data/stateType.enum';
import { EnumKeysPipe } from './../data/enumKeys.pipe';

@Component({
    selector: 'block',
    template: require('./block.template.html'),
    providers: [StepService],
    pipes: [EnumKeysPipe],
    animations: [
        trigger('simpleFlag', [
            state('false', style({
                'max-height': 0,
                opacity: 0,
                transform: 'translate(0, 50%)',
                padding: 0,
                overflow: 'hidden',
                margin: 0,
                border: 0
            })),
            state('true', style({
                opacity: 1,
                transform: 'translate(0, 0)',
                display: 'block'
            }))
        ]),
        trigger('detailFlag', [
            state('false', style({
                'max-height': 0,
                opacity: 0,
                transform: 'translate(0, 50%)',
                padding: 0,
                overflow: 'hidden',
                margin: 0,
                border: 0,
                width: 0
            })),
            state('true', style({
                opacity: 1,
                transform: 'translate(0, 0)'
            }))
        ])
    ]
})
export class BlockComponent implements OnInit {
    StateType = StateType;
    @Input('data') step: Step;
    @Output() onOpenDetail = new EventEmitter;
    @ViewChild('changeStateModal') stateModel: ModalComponent;
    @ViewChild('extendItemModal') extendModel: ModalComponent;
    SelectedItem: Item;
    WaveArray = Array(150).fill(1);

    constructor(private _stepService: StepService) { }

    ngOnInit() {
        //void null reference
        this.SelectedItem = this._stepService.getEmptyItem();
    }

    changeState(item: Item) {
        //copy object to void relative orgin object
        Object.assign(this.SelectedItem, item);
        this.stateModel.open();
    }

    closedChangeState() {
        this._stepService.changeItemState(this.SelectedItem)
            .then(data => {
                if (!data.Result) {
                    alert(data.ErrorMessage);
                    return;
                }

                this.step.ItemList.forEach(item => {
                    if (item.Id !== this.SelectedItem.Id) {
                        return;
                    }

                    item.State = this.SelectedItem.State;
                    item.Description = this.SelectedItem.Description;
                    return false;
                });

                this.SelectedItem = this._stepService.getEmptyItem();
            });
    }

    extendItem(item: Item) {
        //copy object to void relative orgin object
        Object.assign(this.SelectedItem, item);
        this.extendModel.open();
    }

    closedExtendItem() {
        this._stepService.extendItem(this.SelectedItem)
            .then(data => {
                if (!data.Result) {
                    alert(data.ErrorMessage);
                    return;
                }

                this.step.ItemList.forEach(item => {
                    if (item.Id !== this.SelectedItem.Id) {
                        return;
                    }

                    item.PlanDueDay = this.SelectedItem.PlanDueDay;
                    item.Description = this.SelectedItem.Description;
                    return false;
                });

                this.SelectedItem = this._stepService.getEmptyItem();
            });
    }

    checkItem(item: Item) {
        if (!confirm('是否查核此項目?')) {
            return;
        }

        this._stepService.checkItem(item)
            .then(data => {
                if (!data.Result) {
                    alert(data.ErrorMessage);
                    return;
                }

                this.SelectedItem = this._stepService.getEmptyItem();
            });
    }

    updateItemFilePath(item: Item) {
        this._stepService.updateItemFilePath(item);
    }

    openDetail() {
        this.onOpenDetail.emit(this.step);
    }
}