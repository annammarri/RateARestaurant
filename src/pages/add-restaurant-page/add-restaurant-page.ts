//Framework extensions
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-add-restaurant-page',
  templateUrl: 'add-restaurant-page.html'
})
export class AddRestaurantPagePage {
    name;
    type;
    description;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public view:ViewController) {}

    saveRestaurant(){
      let newRestaurant= {
        name: this.name,
        type: this.type,
        description: this.description
      };      
      this.view.dismiss(newRestaurant);      
    }
}
