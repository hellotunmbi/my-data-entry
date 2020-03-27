import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { GenericService } from "src/app/services/generic.service";
import { ModalController } from "@ionic/angular";
import { ReceiptPage } from "../receipt/receipt.page";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.page.html",
  styleUrls: ["./orders.page.scss"]
})
export class OrdersPage implements OnInit {
  orders: any = [];

  constructor(
    private generic: GenericService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.orders = this.generic.getOrders();
  }

  async showOrder(order) {
    console.log("ORDER", order);

    const modal = await this.modalCtrl.create({
      component: ReceiptPage,
      componentProps: {
        order: order
      }
    });

    return await modal.present();
  }
}
