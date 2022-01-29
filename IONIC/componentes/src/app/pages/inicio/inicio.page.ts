import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes: Componentes[] = [
    {
      icon: 'magnet',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon:'alert-circle',
      name: 'Alert',
      redirecTo: '/alert'
    },
    {
      icon:"person-circle-outline",
      name:"Avatar",
      redirecTo: "/avatar"
    },
    {
      icon:'radio-button-off',
      name:'Button',
      redirecTo:'/button'
    },
    {
      icon:'card',
      name:'Card',
      redirecTo:'/card'
    },
    {
      icon:'checkmark-circle',
      name:'CheckBox',
      redirecTo:'/checkbox'
    },
    {
      icon:'calendar-outline',
      name:'DateTime',
      redirecTo:'/datetime'
    }
  ];

  constructor() { }


  ngOnInit() {
  }

}

interface Componentes{
  icon: string;
  name: string;
  redirecTo: string;
}
