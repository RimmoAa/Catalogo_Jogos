import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page'; // Importe o Tab2Page

import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // ExploreContainerComponentModule, // Remova esta linha se ExploreContainerComponent for standalone
    Tab2PageRoutingModule,
    Tab2Page // Adicione Tab2Page aqui, pois ele é standalone
  ],
  declarations: [
    // Tab2Page // Remova Tab2Page daqui, pois ele é standalone
  ]
})
export class Tab2PageModule {}
