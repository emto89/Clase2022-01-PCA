import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private barcodeScanner: BarcodeScanner) {}

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
  }
  ionViewWillLeaver(){
    // console.log("viewWillLeave");
  }
  

  scan(){
    this.barcodeScanner.scan().then( barcodeData =>{
        console.log("Barcode Data", barcodeData);
    })
    .catch(err =>{
       console.log("err", err);
    });
  }
}
