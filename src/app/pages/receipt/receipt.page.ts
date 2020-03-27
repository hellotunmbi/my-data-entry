import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { GenericService } from "src/app/services/generic.service";

@Component({
  selector: "app-receipt",
  templateUrl: "./receipt.page.html",
  styleUrls: ["./receipt.page.scss"]
})
export class ReceiptPage implements OnInit {
  order = {};
  productInfo = {};
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private generic: GenericService
  ) {
    this.order = this.navParams.get("order");
    console.log("modal order", this.order);
  }

  ngOnInit() {
    this.productInfo = this.generic.getProductInfo(this.order["product"]);

    console.log("info", this.productInfo);
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
