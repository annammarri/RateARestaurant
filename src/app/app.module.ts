//Framework extensions
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
//Providers
import { RestaurantService } from '../providers/restaurant-service';
import { AnalyticService } from '../providers/analytic-service';
//Pages
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { AddRestaurantPagePage } from '../pages/add-restaurant-page/add-restaurant-page';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddRestaurantPagePage,
    DetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddRestaurantPagePage,
    DetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
              Storage,
              RestaurantService,
              AnalyticService]
})
export class AppModule {}
