import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Step } from '../data/step.data';
import { Item } from '../data/item.data';
import { StepService } from '../data/step.service';
import { StateType } from '../data/stateType.enum';

@Component({
    selector: 'detailItem',
    template: require('./detailItem.template.html'),
    providers: [StepService]
})
export class DetailItemComponent {
    StateType = StateType;
    @Input('data') item: Item;

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
}