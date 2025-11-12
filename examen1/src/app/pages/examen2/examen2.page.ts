import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-examen2',
  templateUrl: './examen2.page.html',
  styleUrls: ['./examen2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonText, CommonModule, FormsModule]
})
export class Examen2Page implements OnInit {

  nameParts: string[] = ['Allan', 'Humberto', 'Mendoza', 'Gomez'];

  myNamePart: WritableSignal<string> = signal(this.nameParts[0]);

  changeNamePart() : void {
    const currentName = this.myNamePart();
    const currentIndex = this.nameParts.indexOf(currentName);

    const nextIndex = (currentIndex +1) % this.nameParts.length;

    this.myNamePart.set(this.nameParts[nextIndex]);
  }

  constructor() { }

  ngOnInit() {
  }

}
