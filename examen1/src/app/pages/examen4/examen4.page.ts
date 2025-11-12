import { Component, OnInit, signal, WritableSignal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-examen4',
  templateUrl: './examen4.page.html',
  styleUrls: ['./examen4.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, CommonModule, FormsModule]
})
export class Examen4Page implements OnInit {
  
  numPositive: WritableSignal<number> = signal(12);
  numNegative: WritableSignal<number> = signal(-3);

  sumResult = computed(() => {
    return this.numPositive() + this.numNegative();
  });

  subtractResult = computed(() => {
    return this.numPositive() - this.numNegative();
  });

  multiplyResult = computed(() => {
    return this.numPositive() * this.numNegative();
  });

  divideResult = computed(() => {
    const divisor = this.numNegative();
    if (divisor === 0) {
      return 'Indefinido (División por cero)';
    }
    return (this.numPositive() / divisor).toFixed(2);
  });

  updateSignals(newPos: number, newNeg: number): void {
    this.numPositive.set(newPos);
    this.numNegative.set(newNeg);
  }

  constructor() { }

  ngOnInit() {
  }

}
