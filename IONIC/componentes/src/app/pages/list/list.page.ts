import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
 

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuario: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuario = this.dataService.getUsuarios();
  }
  favorite(item){

  }
  unread(item){

  }
  share(item){

  }

}
