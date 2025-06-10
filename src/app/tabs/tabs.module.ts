import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPage } from './tabs.page'; // Importe o TabsPage
import { TabsPageRoutingModule } from './tabs-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    TabsPage // Adicione TabsPage aqui, pois ele é standalone
  ],
  declarations: [
    // TabsPage // Remova TabsPage daqui, pois ele é standalone
  ]
})
export class TabsPageModule {}
