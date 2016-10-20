import { Component, Input, Output, EventEmitter, animate, transition, trigger, state, style } from '@angular/core';

import { Step } from '../data/step.data';
import { DetailItemComponent } from './detailItem.component';

@Component({
    selector: 'block',
    template: require('./block.template.html'),
    directives: [DetailItemComponent],
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
    @Input('data') step: Step;
    @Output() onOpenDetail = new EventEmitter;

    constructor() { }

    openDetail() {
        this.onOpenDetail.emit(this.step);
    }
}