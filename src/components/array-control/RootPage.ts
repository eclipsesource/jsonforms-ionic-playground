import {Component} from "@angular/core";
import {Generate} from '@jsonforms/core';
import {NavController, NavParams} from "ionic-angular";
import {ItemPage} from "../master-detail/pages/item/item";

@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>hello!</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <ion-list>
        <button ion-item *ngFor="let item of listItems" (click)="openDetails(item)" icon-start>
          {{item.label}}
          <template #jsonformsContainer></template>
        </button>
      </ion-list>
    </ion-content>
  `,
  selector: 'jsonforms-array-root-page'
})
export class RootPage {

  private value: any[];
  private disabled: boolean;
  private errors: string;
  private label: string;
  private schema;

  private listItems;

  constructor(private nav: NavController, public navParams: NavParams) {
    this.listItems = navParams.get('listItems');
    this.schema = navParams.get('schema');
  }

  openDetails(item) {

    const uischema = Generate.uiSchema(this.schema.items);
    console.log('ui schema', uischema);
    const x = { path: item.path, schema: this.schema.items,  uischema };
    console.log('x ', x);
    console.log('item ', item);
    this.nav.push(ItemPage, {
      item: x,
      backButton: true
    });
  }
}
