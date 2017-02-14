//Framework extensions
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GoogleAnalytics } from 'ionic-native';

@Injectable()
export class AnalyticService {

  constructor(public http: Http) {
    GoogleAnalytics.debugMode()
    GoogleAnalytics.startTrackerWithId("UA-91940028-1");

    GoogleAnalytics.enableUncaughtExceptionReporting(true)
      .then((_success) => {
        console.log(_success)
      }).catch((_error) => {
        console.log(_error)
      })
  }
  sendEvent(){
    GoogleAnalytics.trackEvent("restaurant-detail", "test-action");
  }
}
