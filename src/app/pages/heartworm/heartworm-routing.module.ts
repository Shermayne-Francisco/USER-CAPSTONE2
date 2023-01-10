import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeartwormPage } from './heartworm.page';

const routes: Routes = [
  {
    path: '',
    component: HeartwormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeartwormPageRoutingModule {}
