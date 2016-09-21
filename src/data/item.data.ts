import { StateType } from './StateType.enum';

export class Item {
    constructor(jsonData?) {
        this.Id = jsonData.Id;
        this.Title = jsonData.Title;
        this.Description = jsonData.Description;
        this.PlanDueDay = jsonData.PlanDueDay;
        this.State = jsonData.State;
        this.IsNew = jsonData.IsNew || false;
        this.RequireFlag = jsonData.RequireFlag || false;
        this.Checked = jsonData.Checked || false;
    }

    Id:number;
    Title: string;
    Description: string;
    PlanDueDay: string;
    State: StateType;
    IsNew: boolean;
    RequireFlag: boolean;
    Checked: boolean;//for toggle effect
}