import { Directive, HostBinding, ElementRef, style, Input } from '@angular/core';
import { Step } from './../data/step.data';

@Directive({
    selector: '[dynamicHight]'
})

export class WaterHightDirective {
    @HostBinding('style.height.%') _height: number;
    @Input() set dynamicHight(value: Step) {
        this._height = value.DoneItemCount / value.TotalItemCount * 100;
    }
}