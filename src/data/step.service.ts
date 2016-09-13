import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { Step } from './step.data';
import { Item } from './item.data';
import { StateType } from './stateType.enum';

@Injectable()
export class StepService {
    constructor(private _http: Http) {
    }

    private _stepList = [
        new Step({
            Title: '專案規劃',
            SelectedFlag: true,
            ItemList: [
                new Item({
                    Title: 'PM 是否已了解合約內容',
                    Description: '預計完成日與 KickOff 預計完成日相同',
                    PlanDueDay: '',
                    State: StateType.WaitStart,
                    IsNew: false,
                    RequireFlag: true
                }),
                new Item({
                    Title: 'kickoff 簡報',
                    Description: '',
                    PlanDueDay: '',
                    State: StateType.WaitStart,
                    IsNew: false,
                    RequireFlag: true
                }),
                new Item({
                    Title: '專案時程計畫表',
                    Description: '',
                    PlanDueDay: '',
                    State: StateType.WaitStart,
                    IsNew: false,
                    RequireFlag: true
                })]
        }),
        new Step({
            Title: '種子教育訓練',
            SelectedFlag: false,
            ItemList: [
                new Item({
                    Title: '教育訓練計畫(時程、任務)',
                    Description: '',
                    PlanDueDay: '',
                    State: StateType.WaitStart,
                    IsNew: false,
                    RequireFlag: true
                }),
                new Item({
                    Title: '教育訓練簽到單',
                    Description: '',
                    PlanDueDay: '',
                    State: StateType.WaitStart,
                    IsNew: false,
                    RequireFlag: true
                })]
        })
    ];

    getInitialStepList(): Promise<Step[]> {
        return Promise.resolve(this._stepList);
    }

    getEmptyItem(): Item {
        return new Item({
            Title: '',
            Description: '',
            PlanDueDay: '',
            State: StateType.WaitStart,
            IsNew: true,
            RequireFlag: false,
            Checked: true
        });
    }

    createProjectCheckList(stepList: Step[]) {
    }

    getStepListByProjectId(id: number): Promise<Step[]> {
        return Promise.resolve(this._stepList);
    }

    updateTemplateCheckList(stepList: Step[]) {
    }

    changeItemState(item: Item) {
    }

    extendItem(item: Item, descr: string) {
    }

    checkItem(item: Item) {
    }

    updateItemFilePath(item: Item) {
    }
}