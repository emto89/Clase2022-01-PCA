import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonIcon } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { HeaderPage } from 'src/app/components/header/header.page';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      name: 'Alert',
      icon: 'alert-circle',
      redirectTo: '/alert'
    },
    {
      name: 'Action Sheet',
      icon: 'menu-outline',
      redirectTo: '/action-sheet'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  name: string;
  icon: string;
  redirectTo: string;
}
