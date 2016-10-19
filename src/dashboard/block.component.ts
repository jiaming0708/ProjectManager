import { Component, Input, Output, EventEmitter, animate, transition, trigger, state, style } from '@angular/core';

import { Step } from '../data/step.data';
import { Item } from '../data/item.data';
import { StepService } from '../data/step.service';
import { StateType } from '../data/stateType.enum';

@Component({
    selector: 'block',
    template: require('./block.template.html'),
    providers: [StepService],
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
export class BlockComponent {
    StateType = StateType;
    @Input('data') step: Step;
    @Output() onOpenDetail = new EventEmitter;

    constructor(private _stepService: StepService) { }

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

    openDetail() {
        this.onOpenDetail.emit(this.step);
    }
}