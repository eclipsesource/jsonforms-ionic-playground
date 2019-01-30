import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";

@IonicPage()
@Component({
  selector: "jsonforms-page",
  template:  `
  <ion-header>
    <ion-title>JSON Forms Ionic Playground</ion-title>
  </ion-header>
  <ion-content>
    <jsonforms-outlet></jsonforms-outlet>
  </ion-content>`
})
export class JsonFormsPage { }
