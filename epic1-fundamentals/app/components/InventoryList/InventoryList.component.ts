/**
 * Created by sbodepudi on 3/22/2017.
 */
import {Component} from "@angular/core";
import {InventoryService} from "../../services/InventoryService";
import {InventoryItem} from "../../shape/InventoryItem";
import {BackendInventoryService} from "../../services/backendservices/backendInventoryService";

@Component({
    selector: 'inventory-list',
    templateUrl:'app/components/InventoryList/InventoryList.component.html',
    styleUrls:['app/components/InventoryList/InventoryList.component.css'],
    providers:[InventoryService,BackendInventoryService]
})
export class InventoryList {
    context:string = "Fruit Basket";
    private _currentItem:InventoryItem;
    currentItemExists:boolean = false;

    constructor(private inventoryService:InventoryService){}

    getItems():InventoryItem[]{
        return this.inventoryService.getItems();
    }

    setCurrentItem(item:InventoryItem){
        this._currentItem = item;
        this.inventoryService.setCurrentItem(item);
        this.currentItemExists = true;
    }

    get currentItem():InventoryItem{
        if(this._currentItem !== undefined){
            return this._currentItem;
        }
        else{
            return {};
        }
    }
}