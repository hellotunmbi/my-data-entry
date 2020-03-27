import { Component, OnInit } from "@angular/core";
import { GenericService } from "src/app/services/generic.service";

@Component({
  selector: "app-createproduct",
  templateUrl: "./createproduct.page.html",
  styleUrls: ["./createproduct.page.scss"]
})
export class CreateproductPage implements OnInit {
  product: any = {};
  users = [];
  message: string = "";

  constructor(private generic: GenericService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.users = this.generic.getUsers();
  }

  createProduct() {
    if (
      // !this.product["customer"] ||
      // this.product["customer"] == "Select Customer" ||
      !this.product["name"] ||
      !this.product["code"] ||
      !this.product["qty"] ||
      !this.product["price"]
    ) {
      console.log("invalid product", this.product);
      this.generic.showAlert("Enter Product Name, Code, Price and Quantity");
    } else {
      this.generic.createProduct(this.product);
      this.message = "Product Saved Successfully";
      this.generic.showToast("Product Saved Successfully");
      console.log(this.product);
      this.product = {};
    }
  }
}
