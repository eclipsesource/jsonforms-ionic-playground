import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavProxyService } from "../../NavProxyService";
import { AbstractMasterPage } from "../AbstractMasterPage";
import { DetailPage } from "../detail/detail";


@IonicPage()
@Component({
  selector: 'jsonforms-master-detail-master',
  templateUrl: 'master.html',
})
export class MasterPage extends AbstractMasterPage {

  items: any[];

  constructor(
    public navParams: NavParams,
    private navProxy: NavProxyService
  ) {
    super();
    this.items = navParams.get('items');
  }

  onItemSelected(item) {
    this.navProxy.pushDetail(DetailPage, { item });
  }
}
