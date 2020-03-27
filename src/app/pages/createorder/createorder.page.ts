import { Component, OnInit } from "@angular/core";
import { GenericService } from "src/app/services/generic.service";
import * as moment from "moment";

@Component({
  selector: "app-createorder",
  templateUrl: "./createorder.page.html",
  styleUrls: ["./createorder.page.scss"]
})
export class CreateorderPage implements OnInit {
  order: any = {};
  products: any = [];
  users: any = [];
  message: string = "";

  constructor(private generic: GenericService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.getOrderData();
  }

  getOrderData() {
    this.products = this.generic.getProducts();
    this.users = this.generic.getUsers();
  }

  createOrder() {
    if (
      !this.order["customer"] ||
      this.order["customer"] == "Select Customer" ||
      !this.order["product"] ||
      this.order["product"] == "Select Product"
    ) {
      this.generic.showAlert("Select valid Customer and Product");
    } else {
      const newOrder = {
        customer: this.order["customer"],
        product: this.order["product"],
        orderDate: moment().format("LLL")
      };
      this.generic.createOrder(newOrder);
      this.generic.showToast("Order Created Successfully");
      this.message = "Order Created Successfully";
      this.order = {};
      console.log("order", newOrder);
    }
  }
}
