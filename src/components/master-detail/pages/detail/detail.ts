import {Component, Optional} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { AbstractDetailPage } from "../AbstractDetailPage";

@IonicPage()
@Component({
  selector: 'jsonforms-master-detail-detail',
  templateUrl: 'detail.html',
})
export class DetailPage extends AbstractDetailPage {

  schema;
  uischema;
  path: string;
  showHeader: boolean;

  constructor(@Optional() nav: NavController, public navParams: NavParams) {
    super();
    const item = navParams.get('item');
    this.path = item.path;
    this.schema = item.schema;
    this.uischema = item.uischema;
    this.showHeader = nav === undefined;
  }
}
