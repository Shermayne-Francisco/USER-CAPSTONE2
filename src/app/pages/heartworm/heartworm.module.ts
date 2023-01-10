import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeartwormPageRoutingModule } from './heartworm-routing.module';

import { HeartwormPage } from './heartworm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeartwormPageRoutingModule
  ],
  declarations: [HeartwormPage]
})
export class HeartwormPageModule {}
