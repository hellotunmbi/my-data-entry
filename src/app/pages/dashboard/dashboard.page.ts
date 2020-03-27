import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"]
})
export class DashboardPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToCreateUser() {
    this.router.navigate(["home/dashboard/createuser"]);
  }

  goToUsers() {
    this.router.navigate(["home/dashboard/users"]);
  }

  goToCreateProduct() {
    this.router.navigate(["home/dashboard/createproduct"]);
  }

  goToCreateOrder() {
    this.router.navigate(["home/dashboard/createorder"]);
  }
}
