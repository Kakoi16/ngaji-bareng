import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HadistPage } from './hadist.page';

const routes: Routes = [
  {
    path: '',
    component: HadistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HadistPageRoutingModule {}
