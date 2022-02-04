import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/componentes.interface';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes: Observable<Componente[]>;

  constructor(private dataService:DataService ) {
    this.initiallizeApp();
  }
  initiallizeApp(){
    this.componentes = this.dataService.getMenu();
  }
}
