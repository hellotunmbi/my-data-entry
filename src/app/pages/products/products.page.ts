import { Component, OnInit } from "@angular/core";
import { GenericService } from "src/app/services/generic.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.page.html",
  styleUrls: ["./products.page.scss"]
})
export class ProductsPage implements OnInit {
  products: { name: string; code: number; qty: number; price: number }[] = [];

  constructor(private generic: GenericService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.generic.getProducts();

    console.log("products", this.products);
  }
}
