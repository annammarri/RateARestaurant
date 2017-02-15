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
import {CONST_COMMENTS} from '../constants/constants';

@Injectable()
export class RestaurantService {
  public restaurantData: any;
  public restaurantList=[];
  public commentList=[];

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
  getComments(restName){
    return this.storage.get(restName);
  }
  updateComments(restName):Promise<Comment[]>{
    this.cleanArray();
    for(let i=0; i<COMMENTS.length; i++){
      if(COMMENTS[i].restName === restName){
        this.commentList.push(COMMENTS[i]);
      }
    }
    return Promise.resolve(this.commentList);
  }
  saveNewComment(item):boolean{
    this.commentList = item;
    this.saveComment(this.commentList[0].restName);
    return true;
  }
  saveComment(name){
    let newComment = JSON.stringify(this.commentList);
    this.storage.set(name, newComment);
  }
  cleanArray(){
    let size = this.commentList.length;
    for(let i=0; i<size; i++){
      this.commentList.pop();
    }
  }
}
