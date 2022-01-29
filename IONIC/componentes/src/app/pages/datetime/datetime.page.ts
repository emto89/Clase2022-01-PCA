import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  fechaNacimiento: Date = new Date();
  customYear = [2025,2020,2016,2008,2004,2000];
  customOptions = {
    buttons:[
      {
        text: 'Hola',
        handler:(event) =>{
          console.log(event);
        }
      },
      {
        text: 'Mundo',
        handler:(event) =>{
          console.log("Cerro");
        }
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event){
    console.log( new Date ( event.detail.value));
  }

}
