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
    //Una vez que se haga la carga de las librerias nativas se puede comenzar a buscar beacons
    this.platform.ready().then(() => {
      evothings.eddystone.startScan((data) => {

        //Si el arreglo no esta vacio se realiza la busqueda
        if (this.beaconData.length !== 0){
            
          //Si no se encontró el elemento registrado actualmente se agrega al objeto beaconData
          if (this.beaconData.find(element => element.address === data.address) === undefined)
            this.beaconData.push(data);

          //Si el elemento efectivamente esta vacio se agrega al arreglo
        }else this.beaconData.push(data);
        
        //Se verifica por cambios en la pantalla cada 1 segundo
        setTimeout(() => {
          this.changeDetector.detectChanges();
        },
        1000);
      }, error => console.log(JSON.stringify(error)));
    });
  }

  //Permite detener la deteccion de beacons
  stopScanningForBeacons(){
    evothings.eddystone.stopScan();
    this.beaconData = [];
  }

}
