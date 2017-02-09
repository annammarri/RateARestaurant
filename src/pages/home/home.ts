import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddRestaurantPagePage} from '../add-restaurant-page/add-restaurant-page';
import { RestaurantService } from '../../providers/restaurant-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[RestaurantService]
})
export class HomePage {
  public items = [];
  constructor(public navCtrl: NavController, 
              private restaurantService: RestaurantService,
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
}
