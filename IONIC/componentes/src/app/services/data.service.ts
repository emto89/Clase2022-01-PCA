import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../../app/interfaces/componentes.interface';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getUsuarios(){
     return this._http.get('https://jsonplaceholder.typicode.com/users');
  }


  getAlbumes(){
     return this._http.get<any[]>("https://jsonplaceholder.typicode.com/albums");
  }

  getMenu(){
     return this._http.get<Componente[]>('/assets/data/menu-opts.json');
  }

  getHeroes(){
    return this._http.get<Componente[]>('/assets/data/superheroes.json').pipe( delay(2000));
 }
}
