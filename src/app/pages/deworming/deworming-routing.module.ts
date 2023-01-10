import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DewormingPage } from './deworming.page';

const routes: Routes = [
  {
    path: '',
    component: DewormingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DewormingPageRoutingModule {}
