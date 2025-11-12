import { Component, computed, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonChip, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonChip, IonLabel,IonToolbar, CommonModule, FormsModule]
})
export class ExamenPage implements OnInit {

  sent: WritableSignal<boolean> = signal(false);
  approved: WritableSignal<boolean> = signal(true);
  
  statusText= computed(() => {
    const isSent = this.sent();
    const isApproved = this.approved();

    if (isSent && isApproved) {
      return 'Sent';
    }

    if(!isSent && isApproved){
      return 'Ready to Sent';
    }

    return 'Pending';
  })


  statusClasses = computed(() => {
    const isSent = this.sent();
    const isApproved = this.approved();

    return {
      'status-green': isSent && isApproved,
      'status-orange': !isSent && isApproved,
      'status-red': !isSent && !isApproved,
    }
  })
  constructor() { }

  ngOnInit() {
  }

}
