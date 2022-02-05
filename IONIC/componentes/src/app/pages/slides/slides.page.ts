import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  slides: { img: string, titulo: string, desc: string } [] = [
    {
        img: '/assets/slides/photos.svg',
        titulo:'Comporte fotos',
        desc: 'Mira y comparte increibles fotos del mundo'
    },
    {
      img: '/assets/slides/music-player-2.svg',
      titulo:'Escucha musica',
      desc: 'Mira y comparte increibles fotos del mundo'
    },
    {
      img: '/assets/slides/calendar.svg',
      titulo:'Nunca olvides nada',
      desc: 'Mira y comparte increibles fotos del mundo'
    },
    {
      img: '/assets/slides/placeholder-1.svg',
      titulo:'Tu ubicacion',
      desc: 'Mira y comparte increibles fotos del mundo'
    } 
]


  constructor(private navController: NavController) { }

  ngOnInit() {
  }
  onClick(){
    this.navController.navigateBack('/');
  }
}
