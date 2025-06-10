import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Tab1Page } from './tab1.page'; // Importe o Tab1Page
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    Tab1Page // Adicione Tab1Page aqui, pois ele é standalone
  ],
  declarations: [
    // Tab1Page // Remova Tab1Page daqui, pois ele é standalone
  ]
})
export class Tab1PageModule {}
