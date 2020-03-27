import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateorderPageRoutingModule } from './createorder-routing.module';

import { CreateorderPage } from './createorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateorderPageRoutingModule
  ],
  declarations: [CreateorderPage]
})
export class CreateorderPageModule {}
