import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular'; // Importe NavController

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton],
})
export class Tab1Page {
  constructor(private navCtrl: NavController) {} // Injete NavController

  goToGamesList() {
    this.navCtrl.navigateForward('/tabs/tab2'); // Use NavController para navegar
  }
}
