import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  beaconData : any;

  constructor(private changeDetector: ChangeDetectorRef, public navCtrl: NavController, private platform: Platform) {

  }

  startScanningForBeacons(){
    this.platform.ready().then(() => {
      evothings.eddystone.startScan((data) => {
        //alert(JSON.stringify(data));
        this.beaconData = data;
        setTimeout(() => {
          this.changeDetector.detectChanges();
        },
        1000);
      }, error => console.log(JSON.stringify(error)));
    });
  }

  stopScanningForBeacons(){
    evothings.eddystone.stopScan();
    this.beaconData = null;
  }

}
