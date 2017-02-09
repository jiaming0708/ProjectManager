import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Step } from './step.data';
import { Item } from './item.data';
import { StateType } from './stateType.enum';

@Injectable()
export class StepService {
    constructor(private _http: Http) {
    }

    private url = "http://localhost:3000/";
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

    getInitialStepList() {
        return this._http.post(this.url + "GetTemplateStepList", "")
            .switchMap(this.checkResult)
            .map(this.parseStepDataList)
            .catch(this.handleError);
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

    createProjectCheckList(id: number, stepList: Step[]) {
        return this._http.post(this.url + "CreateProjectCheckList", { projectId: id, lstStepModel: stepList })
            .switchMap(this.checkResult)
            .catch(this.handleError);
    }

    getStepListByProjectId(id: number) {
        return this._http.post(this.url + "GetStepListByProjectId", { projectId: id })
            .switchMap(this.checkResult)
            .map(this.parseStepDataList)
            .catch(this.handleError);
    }

    updateTemplateCheckList(stepList: Step[]) {
        return this._http.post(this.url + "UpdateTemplateCheckList", stepList)
            .switchMap(this.checkResult)
            .map(this.parseStepDataList)
            .catch(this.handleError);
    }

    changeItemState(item: Item) {
        return this._http.post(this.url + "ChangeItemState", item)
            .switchMap(this.checkResult)
            .catch(this.handleError);
    }

    extendItem(item: Item) {
        return this._http.post(this.url + "ExtendItem", item)
            .switchMap(this.checkResult)
            .catch(this.handleError);
    }

    checkItem(item: Item) {
        return this._http.post(this.url + "CheckItem", item)
            .switchMap(this.checkResult)
            .catch(this.handleError);
    }

    updateItemFilePath(item: Item) {
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Observable.throw(error.Message || error);
    }

    private parseStepData(data: any): Step {
        var step = new Step(data);
        step.ItemList = [];
        data.ItemList.forEach(element => {
            step.ItemList.push(new Item(element));
        });

        return step;
    }

    private parseStepDataList(data: any): Step[] {
        var lstStep: Step[] = [];
        data.forEach(element => {
            var step = new Step(element);
            step.ItemList = [];
            element.ItemList.forEach(item => {
                step.ItemList.push(new Item(item));
            });
            lstStep.push(step);
        });

        if (lstStep.length > 0) {
            lstStep[0].SelectedFlag = true;
        }

        return lstStep;
    }

    private checkResult(res: any): Observable<any> {
        var data = res.json();
        if (!data.Result) {
            Observable.throw(data.ErrorMessage);
        }

        return Observable.of(data.StepList);
    }
}