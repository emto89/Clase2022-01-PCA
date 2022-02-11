import { Injectable } from '@angular/core';
import { Pelicula, PeliculaDetalle } from '../interfaces/interface';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];

  constructor(private storage: Storage, private toatController: ToastController) { 
    this.cargarFavoritos();
  }

  async ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  async presentToast(message: string){
    const toast = await this.toatController.create({
      message,
      duration:1500 
    });
    toast.present();
  }


  guardarPelicula( pelicula: PeliculaDetalle){
      
      let existe = false; 
      let mensaje = '';
      

      for ( const peli of this.peliculas) {
        if(peli.id === pelicula.id){
          existe = true;
          break;
        }
      }
      if( existe){
        this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id);   
        mensaje = 'Removido de favoritos';
      }else{
        this.peliculas.push( pelicula );
        mensaje = 'Agregada a favoritos';
      }
      
      this.presentToast(mensaje);
      this.storage.set('peliculas', this.peliculas)
        
    return  !existe;
  }

  async cargarFavoritos(){
    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existePelicula( id ) {

    await this.cargarFavoritos();
    const existe = this.peliculas.find( peli => peli.id === id );

    return (existe) ? true : false;
  }

  
}
