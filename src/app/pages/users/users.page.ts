import { Component, OnInit } from "@angular/core";
import { GenericService } from "src/app/services/generic.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.page.html",
  styleUrls: ["./users.page.scss"]
})
export class UsersPage implements OnInit {
  users: { name: string; location: string }[] = [];

  constructor(private generic: GenericService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.getUsers();
  }

  getUsers() {
    this.users = this.generic.getUsers();

    console.log("users", this.users);
  }
}
