/**
 * Created by sbodepudi on 3/22/2017.
 */
import {Injectable} from "@angular/core";
import {InventoryItem} from "../shape/InventoryItem";
import {BackendInventoryService} from "./backendservices/backendInventoryService";

@Injectable()
export class InventoryService{
    currentItem:InventoryItem;
    constructor(private backendInventoryService:BackendInventoryService){}
    //consturctor(){}

    getItems():InventoryItem[]{
        return this.backendInventoryService.getItems();

    }

    setCurrentItem(item:InventoryItem){
        this.currentItem = item;
        console.log("the current item is "+this.currentItem.name);
    }

}