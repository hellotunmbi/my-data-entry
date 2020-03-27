import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateorderPage } from './createorder.page';

const routes: Routes = [
  {
    path: '',
    component: CreateorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateorderPageRoutingModule {}
