import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  
  guardados: Registro[] = [];

  constructor( private storage: Storage , private InAppBrower: InAppBrowser, private navController: NavController  ) { 

   this.cargarStorage();
  }

  async cargarStorage(){
    this.guardados = await this.storage.get('registros') || [];
  }

  guardarRegistros( format: string, text: string){
    
      
    const nuevoRegistro = new Registro(format, text);
    this.guardados.unshift(nuevoRegistro);
    
    this.storage.set('registros',this.guardados);

    this.abrirRegistros(nuevoRegistro);
    

  }

  abrirRegistros( registro: Registro){

    this.navController.navigateForward('/tabs/tab2')
      
    switch (registro.type) {
      case 'http':
      
        this.InAppBrower.create(registro.text, '_system');

      break;
      case 'geo':

        this.navController.navigateForward(`/tabs/tab2/mapa/${registro.text}`);
        
      break;
    
      default:
        break;
    }

  }
}
