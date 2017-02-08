import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Restaurant } from '../pages/restaurants/restaurant';
import { RESTAURANTS } from '../pages/restaurants/mock-restaurants';
import { Storage } from '@ionic/storage';
import {CONST_RESTAURANTS} from '../constants/constants';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantService {
  public restaurantData: any;
  public restaurantList=[];
  constructor(public storage:Storage, public http:Http) { 
    this.resetLocalStorage();
  }

  getRestaurants(){
    return this.storage.get(CONST_RESTAURANTS);
  }
  saveNewRestaurants(item):boolean{
    this.restaurantList = item;
    this.saveData();
    return true;
  }
  updateRestaurants(): Promise<Restaurant[]>{    
    this.restaurantList = RESTAURANTS;
    this.saveData();
    return Promise.resolve(RESTAURANTS);
  }
  saveData(){
    let newData= JSON.stringify(this.restaurantList);
    this.storage.set(CONST_RESTAURANTS, newData);
  }
  resetLocalStorage(){
    this.storage.clear();
  }
}
