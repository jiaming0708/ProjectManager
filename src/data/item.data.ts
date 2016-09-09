import { StateType } from './StateType.enum';

export class Item {
    constructor(jsonData?){
        Object.assign(this, jsonData);
    }
    
    Title: string;
    Description: string;
    PlanDueDay: string;
    State: StateType;
    IsNew: boolean;
    RequireFlag: boolean;
    Checked:boolean;//for toggle effect
}