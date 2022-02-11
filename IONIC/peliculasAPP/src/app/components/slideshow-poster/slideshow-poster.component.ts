import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/interface';
import { DetalleComponent } from '../detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() peliculas: Pelicula[] = []; 

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  };

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async verDetalle(id: number){
    
    const modal = await this.modalController.create({
        component: DetalleComponent,
        componentProps:{
          id
        }
    });

    modal.present();
      
  }

}
