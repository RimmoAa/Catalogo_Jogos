import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, CommonModule],
})
export class Tab1Page {
  
  featuredGames = [
    {
      title: 'Omori',
      genre: 'RPG Psicológico',
      rating: 4.9,
      image: 'assets/featured/omori.jpg'
    },
    {
      title: 'Deltarune',
      genre: 'RPG Aventura',
      rating: 4.8,
      image: 'assets/featured/deltarune.jpg'
    },
    {
      title: 'Sonic Adventure 2',
      genre: 'Plataforma 3D',
      rating: 4.5,
      image: 'assets/featured/sonic_adventure_2.jpg'
    },
    {
      title: 'Hollow Knight',
      genre: 'Metroidvania',
      rating: 4.9,
      image: 'assets/featured/hollow_knight.jpg'
    }
  ];

  constructor(private navCtrl: NavController) {}

  goToGamesList() {
    this.navCtrl.navigateForward('/tabs/tab2');
  }
}
