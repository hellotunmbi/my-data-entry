import { Component, OnInit } from "@angular/core";
import { GenericService } from "src/app/services/generic.service";

@Component({
  selector: "app-createuser",
  templateUrl: "./createuser.page.html",
  styleUrls: ["./createuser.page.scss"]
})
export class CreateuserPage implements OnInit {
  user: any = {};
  message: string = "";

  constructor(private generic: GenericService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.message = "";
  }

  createUser() {
    if (!this.user["name"] || !this.user["location"]) {
      this.generic.showAlert("Enter Name and Location");
    } else {
      this.generic.createUser(this.user);
      this.generic.showToast("User added successfully");
      this.message = "User Added Successfully";
      this.user = {};
    }
  }
}
