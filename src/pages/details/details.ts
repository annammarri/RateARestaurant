//Framework extensions
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//Providers
import { RestaurantService } from '../../providers/restaurant-service';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  name;
  type;
  description;
  public items = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public restaurantService: RestaurantService) {}

  ionViewDidLoad() {
    this.name = this.navParams.get('name');
    this.type = this.navParams.get('type');
    this.description = this.navParams.get('description');
    this.restaurantService.getComments(this.name).then((comments)=>{
      if(comments){
        this.items= comments;
      }
    });
  }
}
