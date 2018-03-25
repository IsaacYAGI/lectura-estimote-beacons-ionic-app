import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  beaconData : any;

  constructor(private changeDetector: ChangeDetectorRef, public navCtrl: NavController, private platform: Platform) {
    this.beaconData = [];
  }

  startScanningForBeacons(){
    this.platform.ready().then(() => {
      evothings.eddystone.startScan((data) => {
        //console.log("YAGI-" + JSON.stringify(data));
        //Si no se encuentra el beacon leido por el dispositivo en la lista...
        console.log("YAGI - data=" + JSON.stringify(data));
        //var buscarBeacon = this.beaconData.find(element => element.address == data.address);
        let buscarBeacon = null;
        if (this.beaconData !== null){
          buscarBeacon = this.beaconData.find(function(element){
            console.log("YAGI-" + "Buscando... element vs data="+element.address + " === " + data.address);
            return element.address === data.address
          });
          
          if (buscarBeacon === undefined){
            this.beaconData.push(data);
          }

        }else this.beaconData.push(data);
        console.log("YAGI-" + "buscarBeacon="+JSON.stringify(buscarBeacon));
        /*
        if ( buscarBeacon !== undefined){

          //Se agrega a la lista
          this.beaconData.push(data);
          console.log("YAGI-" + "Se agrego un nuevo beacon a la lista!");
        }else{
          console.log("YAGI-" + "Buscarbeacon="+JSON.stringify(buscarBeacon));
        }
        */
        setTimeout(() => {
          this.changeDetector.detectChanges();
        },
        1000);
      }, error => console.log(JSON.stringify(error)));
    });
  }

  stopScanningForBeacons(){
    evothings.eddystone.stopScan();
    this.beaconData = [];
  }

}
