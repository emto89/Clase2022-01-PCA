import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  peliculasRecientes: Pelicula[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getFeature().subscribe(  resp=>{
      this.peliculasRecientes = resp.results;
    })
  }

}