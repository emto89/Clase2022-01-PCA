import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/componentes.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes: Observable<Componente[]> = null;

  constructor(private _servicio : DataService) { }


  ngOnInit() {

    this.componentes = this._servicio.getMenu();

    console.log(this.componentes);

  }

}