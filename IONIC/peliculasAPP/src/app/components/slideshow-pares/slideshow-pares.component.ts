import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../../interfaces/interface';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween:-10
  };

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onClick(){
    this.cargarMas.emit();
  }
  async verDetalle(id: string){
    
    const modal = await this.modalController.create({
        component: DetalleComponent,
        componentProps:{
          id
        }
    });

    modal.present();
      
  }

}
