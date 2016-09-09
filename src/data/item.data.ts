import { StateType } from './StateType.enum';

export class Item {
    Title: string;
    Description: string;
    PlanDueDay: string;
    State: StateType;
    IsNew: boolean;
    RequireFlag: boolean;
    Checked:boolean;//for toggle effect
}