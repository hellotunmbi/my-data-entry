import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { ToastController, AlertController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class GenericService {
  STORAGE_NAME = "mydata";
  users: { name: string; location: string }[] = [];
  products: {
    name: string;
    code: number;
    qty: number;
    price: number;
  }[] = [];
  orders: { customer: string; product: string; orderDate: string }[] = [];

  constructor(
    private storage: Storage,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {}

  async showToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      color: "dark",
      duration: 2000
    });
    toast.present();
  }

  async showAlert(message) {
    const alert = await this.alertCtrl.create({
      header: "Alert",
      message,
      buttons: ["OK"]
    });

    await alert.present();
  }

  // ====== Users ==========
  createUser(userData) {
    this.users.push(userData);
    this.saveToStorage(this.users);
  }

  getUsers() {
    return this.users;
  }

  // ====== Products ==========
  createProduct(productData) {
    this.products.push(productData);
  }

  getProducts() {
    return this.products;
  }

  getProductInfo(product) {
    return this.products.find(prdt => {
      console.log("prdt", prdt);
      return prdt["name"] === product;
    });
  }

  // ====== Products ==========

  createOrder(orderData) {
    this.orders.push(orderData);
  }

  getOrders() {
    return this.orders;
  }

  // ====== Users ==========
  saveToStorage(data) {
    return this.storage.set(this.STORAGE_NAME, JSON.stringify(data));
  }

  getStorageData() {
    return this.storage.get(this.STORAGE_NAME);
  }
}
