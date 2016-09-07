import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { Step } from './step.data';
import { Item } from './item.data';
import { StateType } from '../stateType.enum';

@Injectable()
export class TemplateService {
    constructor(private _http: Http) { }

    private _stepList = [{
        Title: '專案規劃',
        SelectedFlag: true,
        ItemList: [{
            Title: 'PM 是否已了解合約內容',
            Description: '預計完成日與 KickOff 預計完成日相同',
            PlanDueDay: '',
            State: StateType.WaitStart,
            IsNew: false,
            RequireFlag: true
        }, {
                Title: 'kickoff 簡報',
                Description: '',
                PlanDueDay: '',
                State: StateType.WaitStart,
                IsNew: false,
                RequireFlag: true
            }, {
                Title: '專案時程計畫表',
                Description: '',
                PlanDueDay: '',
                State: StateType.WaitStart,
                IsNew: false,
                RequireFlag: true
            }]
    }, {
            Title: '種子教育訓練',
            SelectedFlag: false,
            ItemList: [{
                Title: '教育訓練計畫(時程、任務)',
                Description: '',
                PlanDueDay: '',
                State: StateType.WaitStart,
                IsNew: false,
                RequireFlag: true
            }, {
                    Title: '教育訓練簽到單',
                    Description: '',
                    PlanDueDay: '',
                    State: StateType.WaitStart,
                    IsNew: false,
                    RequireFlag: true
                }]
        }
    ];

    getInitialStepList(): Promise<Step[]> {
        return Promise.resolve(this._stepList);
    }

    getEmptyItem(): Item {
        return {
            Title: '',
            Description: '',
            PlanDueDay: '',
            State: StateType.WaitStart,
            IsNew: true,
            RequireFlag: false,
            Checked: true
        };
    }

    createProjectCheckList(stepList: Step[]) {
    }
}