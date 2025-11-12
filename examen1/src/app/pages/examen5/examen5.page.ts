import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonActionSheet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-examen5',
  templateUrl: './examen5.page.html',
  styleUrls: ['./examen5.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonActionSheet, CommonModule, FormsModule]
})
export class Examen5Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
