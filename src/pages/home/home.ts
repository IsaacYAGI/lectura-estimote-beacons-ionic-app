import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private platform: Platform) {

  }

  startScanningForBeacons(){
    this.platform.ready().then(() => {
      evothings.eddystone.startScan((beaconData) => {
        alert(JSON.stringify(beaconData));
      }, error => alert(JSON.stringify(error)));
    });
  }

}
