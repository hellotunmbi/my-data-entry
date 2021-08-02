import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  hasPermission = false;
  token = "";

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // this.getToken();

    // // subscribe to a topic
    // this.fcm.subscribeToTopic("Deals");

    // // ionic push notification example
    // this.fcm.onNotification().subscribe((data) => {
    //   console.log("Push Data", data);
    //   if (data.wasTapped) {
    //     console.log("Received in background");
    //   } else {
    //     console.log("Received in foreground");
    //   }
    // });

    // // refresh the FCM token
    // this.fcm.onTokenRefresh().subscribe((token) => {
    //   console.log("Token refreshed", token);
    // });

    // // unsubscribe from a topic
    // this.fcm.unsubscribeFromTopic("offers");
  }

  private async pushSetup() {
    console.log("FCM SETUP INIT");
    if (!this.platform.is("cordova")) {
      return;
    }

    console.log("IN CORDOVA");

    this.hasPermission = await this.fcm.requestPushPermission();
    console.log("CHECK hasPermission:", this.hasPermission);

    this.token = await this.fcm.getToken();
    console.log("CHECK getToken: " + this.token);

    console.log("ON NOTIFICATION SUBSCRIBE");
    this.fcm
      .onTokenRefresh()
      .subscribe((newToken) => console.log("NEW TOKEN:", newToken));
    this.fcm
      .onNotification()
      .subscribe((payload: object) => console.log("ON NOTIFICATION:", payload));
  }

  async getToken() {
    // get FCM token
    try {
      const fcmToken: string = await this.fcm.getToken();
      return fcmToken;
      console.log("new token", fcmToken);
    } catch (err) {
      console.log("couldnt get token", err);
    }
  }
}
