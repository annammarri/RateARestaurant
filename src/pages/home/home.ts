//Framework extensions
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
//External extensions
import { Firebase } from 'ionic-native';
//Pages
import { AddRestaurantPagePage} from '../add-restaurant-page/add-restaurant-page';
import { DetailsPage } from '../details/details';
//Providers
import { RestaurantService } from '../../providers/restaurant-service';
import { AnalyticService } from '../../providers/analytic-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items = [];
  constructor(public navCtrl: NavController, 
              private restaurantService: RestaurantService,
              private analyticService: AnalyticService,
              public modalCtrl: ModalController) { 
  }

  ionViewDidLoad(){
     this.restaurantService.getRestaurants().then((rests) => {
      if(rests){
        this.items = JSON.parse(rests); 
      } else { 
        this.restaurantService.updateRestaurants().then(restaurants => {
          if(restaurants){
            this.items = restaurants;
          }
        });
      }
    });
  }

  goToAddRestaurant(){
    let addModal = this.modalCtrl.create(AddRestaurantPagePage);
    addModal.onDidDismiss((item)=>{
      if(item){
        this.saveNewRestaurant(item);
      }
    });
    addModal.present(); 
  }
  saveNewRestaurant(item){
    this.items.push(item);
    this.restaurantService.saveNewRestaurants(this.items);
  }
  goToDetails(name,type, description){
    //Firebase.logEvent("Restaurant-detail", {name: name, type:  type});
    this.analyticService.sendEvent();
    this.navCtrl.push(DetailsPage,{name:name, type:type, description:description});
  }
}
