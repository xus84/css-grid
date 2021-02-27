import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Picture1PageRoutingModule } from './picture1-routing.module';

import { Picture1Page } from './picture1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Picture1PageRoutingModule
  ],
  declarations: [Picture1Page]
})
export class Picture1PageModule {}
