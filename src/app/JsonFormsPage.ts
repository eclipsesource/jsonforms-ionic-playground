import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector:'jsonforms-page',
  template:  '<jsonforms-outlet></jsonforms-outlet>'
})
export class JsonFormsPage {
  constructor() {
  }
}
