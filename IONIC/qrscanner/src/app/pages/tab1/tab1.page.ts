import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private barcodeScanner: BarcodeScanner,
    private dataLocal: DataLocalService) {}

  swiperOpt = {
    allowSlidePrev: false,
    allowSlideNext: false
  }
  ionViewDidEnter(){
    // console.log("viewDidEnter");
  }
  ionViewDidLeave(){
    // console.log("viewDidLeave");
  }
  ionViewWillEnter(){
    // console.log("viewWillEnter");
    this.scan();
  }
  ionViewWillLeaver(){
    // console.log("viewWillLeave");
  }
  

  scan(){
    this.barcodeScanner.scan().then( barcodeData =>{
        console.log("Barcode Data", barcodeData);
        if(!barcodeData.cancelled){
            
        }
    })
    .catch(err =>{
       console.log("err:", err);
      //  this.dataLocal.guardarRegistros('QRCode','https://github.com/phonegap/phonegap-plugin-barcodescanner');
          this.dataLocal.guardarRegistros('QRCode','geo:10.986592900000002,-74.81912623325198');
    });
  }
}
