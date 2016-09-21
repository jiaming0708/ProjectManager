import { Item } from './item.data';
import { StateType } from './stateType.enum';

export class Step {
    constructor(jsonData?) {
        this.Id = jsonData.Id;
        this.Title = jsonData.Title;
        this.ItemList = [];
        this.SelectedFlag = jsonData.SelectedFlag || false;
    }

    Id: number;
    Title: string;
    ItemList: Item[];
    SelectedFlag: boolean;

    get TotalItemCount() {
        return this.ItemList.length;
    }

    get DoneItemCount() {
        return this.ItemList.filter(p => p.State === StateType.Done).length;
    }
}