import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddRestaurantPagePage } from '../pages/add-restaurant-page/add-restaurant-page';
import { HttpModule }    from '@angular/http';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddRestaurantPagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddRestaurantPagePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
              Storage]
})
export class AppModule {}
