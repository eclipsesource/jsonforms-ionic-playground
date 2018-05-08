import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { DetailPage } from "../DetailPage";

@IonicPage()
@Component({
  selector: 'jsonforms-page-item',
  templateUrl: 'item.html',
})
export class ItemPage extends DetailPage {

  schema;
  uischema;
  path: string;

  constructor(public navParams: NavParams) {
    super();
    const item = navParams.get('item');
    this.path = item.path;
    this.schema = item.schema;
    this.uischema = item.uischema;
  }
}
