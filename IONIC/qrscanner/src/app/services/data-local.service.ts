import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { NavController } from '@ionic/angular';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  
  guardados: Registro[] = [];

  constructor( private storage: Storage , private InAppBrower: InAppBrowser, private navController: NavController, private file:File, private emaicomposer: EmailComposer  ) { 

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
  enviarCorreo(){

      const arrTemp = [];
      const titulos = 'Tipo, Formato, Creado en, Texo\n';
      arrTemp.push(titulos);
      
      this.guardados.forEach( registro =>{

        const linea = `${registro.type},${registro.format},${registro.created},${registro.text.replace(',',' ')}\n`;

        arrTemp.push(linea);
      });

      this.crearArchivoFisico(arrTemp.join(''));

  }

  crearArchivoFisico(text: string){
    console.log(`${this.file.dataDirectory}`);
      this.file.checkFile( this.file.dataDirectory, 'registros.csv').then( existe =>{
        console.log("Existe archivo?", existe);
        this.escribirEnArchivo(text);
      }).catch ( err =>{
         return this.file.createFile( this.file.dataDirectory, 'registros.csv', false).then( creado =>{
           this.escribirEnArchivo(text);
         }).catch( err2=> console.log("No se pudo crear el archivo", err2));
      });

  }

  async escribirEnArchivo( text: string){
      
        await this.file.writeExistingFile( this.file.dataDirectory,'registros.csv', text); 

        const archivo = `${this.file.dataDirectory}/registros.csv`;
        console.log(`${this.file.dataDirectory}/registros.csv`);
        
        const email = {
          to: 'mdiaz@pca.edu.co',
          // cc: 'erika@mustermann.de',
          // bcc: ['john@doe.com', 'jane@doe.com'],
          attachments: [
            archivo
          ],
          subject: 'Backup de scans',
          body: 'Aqui tienes sus backup de los scans',
          isHtml: true
        }

        this.emaicomposer.open(email);

  }
}
