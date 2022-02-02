import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.page.html',
  styleUrls: ['./list-order.page.scss'],
})
export class ListOrderPage implements OnInit {


  reoderDisable: boolean = true; 

  personajes: string[] = ['Aquaman','Superman','Batman','Mujer Maravilla','Flash','Capitan America']


  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any){
       
      const itemMover = this.personajes.splice(event.detail.from,1)[0];
      this.personajes.splice( event.detail.to,0,itemMover);

      event.detail.complete();

      console.log(this.personajes);
      
  }

}
