/**
 * Created by sbodepudi on 3/22/2017.
 */
import {Injectable} from "@angular/core";
import {InventoryItem} from "../../shape/InventoryItem";

@Injectable()
export class BackendInventoryService{
    constructor(){}

    getItems():InventoryItem[]{
        let items:InventoryItem[] = [{
            guid:'fruit1',
            name:'Apple',
            price:1.50
        },
        {
            guid:'fruit2',
            name:'Orange',
            price:2.50
        },
        {
            guid:'fruit3',
            name:'Banana',
            price:3.50
        }];
        return items;
    }
}