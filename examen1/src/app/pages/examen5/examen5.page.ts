import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonActionSheet, ActionSheetController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-examen5',
  templateUrl: './examen5.page.html',
  styleUrls: ['./examen5.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonActionSheet, CommonModule, FormsModule]
})
export class Examen5Page implements OnInit {

  actionSheetButtons = signal([
    {
      text: 'Editar Perfil',
      role: 'edit',
      handler: () => {
        console.log('Navegar a Editar Perfil...');
      },
    },
    {
      text: 'Cambiar contraseña',
      role: 'change-password',
      handler: () => {
        console.log('Navegar a Cambiar Contraseña...');
      },
    },
    {
      text: 'Cerrar sesión',
      role: 'destructive',
      data: {
        action: 'logout',
      },
      handler: () => {
        console.log('Cerrando sesión...');
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ]);
  constructor() { }

  ngOnInit() {
  }

}
