import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OrdersPageRoutingModule } from "./orders-routing.module";

import { OrdersPage } from "./orders.page";
import { ReceiptPageModule } from "../receipt/receipt.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersPageRoutingModule,
    ReceiptPageModule
  ],
  declarations: [OrdersPage]
})
export class OrdersPageModule {}
