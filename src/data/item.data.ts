import { StateType } from './StateType.enum';

export class Item {
    constructor(jsonData?) {
        this.Id = jsonData.Id;
        this.Title = jsonData.Title;
        this.Description = jsonData.Description;
        this.PlanDueDay = new Date(parseInt(jsonData.PlanDueDay.replace(/[^0-9 +]/g, ''))).toLocaleDateString();
        this.State = jsonData.State;
        this.IsNew = jsonData.IsNew || false;
        this.RequireFlag = jsonData.RequireFlag || false;
        this.Checked = jsonData.Checked || false;
        this.DelayFlag = jsonData.DelayFlag || false;
    }

    Id: number;
    Title: string;
    Description: string;
    PlanDueDay: string;
    State: StateType;
    IsNew: boolean;
    RequireFlag: boolean;
    Checked: boolean;//for toggle effect
    DelayFlag: boolean;
}