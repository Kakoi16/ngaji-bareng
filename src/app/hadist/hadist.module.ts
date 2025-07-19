import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HadistPageRoutingModule } from './hadist-routing.module';

// HadistPage tidak perlu di-import di sini jika sudah di-load di routing
// import { HadistPage } from './hadist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HadistPageRoutingModule
  ],
  declarations: [] // HAPUS HadistPage dari sini
})
export class HadistPageModule {}