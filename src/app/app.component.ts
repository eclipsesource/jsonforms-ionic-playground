import { Component } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { Platform } from "ionic-angular";
import {JsonFormsPage} from "./JsonFormsPage";

@Component({
  templateUrl: "app.html"
})
export class MyApp {

  private page: JsonFormsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.page = JsonFormsPage;
  }
}
