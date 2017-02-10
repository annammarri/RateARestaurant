//Framework extensions
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//Entities
import { Restaurant } from '../entities/restaurant';
import { Comment } from '../entities/comment';
//Mocks
import { RESTAURANTS } from '../mocks/mock-restaurants';
import { COMMENTS } from '../mocks/mock-comments';
//Constants
import {CONST_RESTAURANTS} from '../constants/constants';


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
  getComments(restName):Promise<Comment[]>{
    let commentList=[];
    for(let i=0; i<COMMENTS.length; i++){
      if(COMMENTS[i].restName === restName){
        commentList.push(COMMENTS[i]);
      }
    }
    return Promise.resolve(commentList);
  }
}
