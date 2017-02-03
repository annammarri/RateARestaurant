import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  types : string[];
  images: string[];
  names: string[];
  descriptions: string[];
  restaurants: Array<{name: string, description: string, type:string, image:string}>;
  constructor(public navCtrl: NavController) {  
    this.types=['Hindu', 'Italian', 'Meat', 'Vegetarian', 'Mexican'];
    this.descriptions=['Taj Mahal has been selected for the 2016 Certificate of Excellence', 
                       'Italian pasta specialist',
                       'Are dinners were cooked to perfection and the ambience takes the you back to another place and time',
                       'Best vegan ans vegetarian food'];
    this.names=['The Taj Mahal', 'Andiamo La','Aqui es', 'Neshuma' ]
    this.images=['../assets/img/hindu.jpg', '../assets/img/italian.jpg','../assets/img/meat.jpg','../assets/img/vegetarian.jpg','../assets/img/mexican.jpg'];  
    this.restaurants=[];

    for(let i = 0; i < 4; i++) {
      this.restaurants.push({
        name: this.names[i],
        description: this.descriptions[i],
        type: this.types[i],
        image:this.images[i]
      });
    }
  
  }

}
