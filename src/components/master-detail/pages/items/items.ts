import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavProxyService } from "../../NavProxyService";
import { MasterPage } from "../MasterPage";
import { ItemPage } from "../item/item";

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage extends MasterPage {

  items: any[];

  constructor(
    public navParams: NavParams,
    private navProxy: NavProxyService
  ) {
    super();
    this.items = navParams.get('items');
  }

  onItemSelected(item) {
    this.navProxy.pushDetail(ItemPage, { item });
  }
}
