import { Component } from '@angular/core';
import { Pelicula } from '../interfaces/interface';
import { MoviesService } from '../services/movies.service';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textBuscar = '';
  peliculas: Pelicula[] = [];
  buscando = false;
  ideas: string[] = ['Spiderman','Avenger','El seño de los anillos','La vida es bella','El aro']


  constructor( private _moviesService: MoviesService,
    private modalController: ModalController) {}

  buscar( event ){

    const textoBuscar: string = event.detail.value;
    if( textoBuscar.length === 0 ){
      this.buscando = false;
      this.peliculas = [];
       return;
    }
    this.buscando = true;
    this._moviesService.buscarPeliculas( textoBuscar ).subscribe( resp=>{
        this.peliculas = resp['results'];
        this.buscando = false;
    })
  }
  async detallePelicula(id: number){
    

    const modal = await this.modalController.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
    

  }  

}
