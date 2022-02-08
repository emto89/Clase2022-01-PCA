import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaMDB } from '../interfaces/interface';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http: HttpClient) { }

  private ejecutarQuery<T>(query: string){
    query = URL + query;
    query+= `&api_key=${apiKey}&language=es&include_image_language=es`

    return this._http.get<T>(query);
  }

  getFeature(){
    return this.ejecutarQuery<RespuestaMDB>("/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22")
  }
}
