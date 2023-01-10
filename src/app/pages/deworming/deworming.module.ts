import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DewormingPageRoutingModule } from './deworming-routing.module';

import { DewormingPage } from './deworming.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DewormingPageRoutingModule
  ],
  declarations: [DewormingPage]
})
export class DewormingPageModule {}
