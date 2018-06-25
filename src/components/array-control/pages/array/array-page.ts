import {Component, OnInit, Optional} from '@angular/core';
import * as _ from 'lodash';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {JsonFormsState, toDataPath} from '@jsonforms/core';
import {NgRedux} from "@angular-redux/store";
import {makeLabel, openDetails} from "../common-array-utils";
import {AbstractDetailPage} from "../../../master-detail/pages/AbstractDetailPage";

@IonicPage()
@Component({
  selector: 'jsonforms-array-array-page',
  templateUrl: 'array-page.html',
})
export class ArrayPage extends AbstractDetailPage implements OnInit {

  items: any[];
  schema;
  uischema;
  path: string;
  showHeader: boolean;

  constructor(protected ngRedux: NgRedux<JsonFormsState>, @Optional() protected nav: NavController, navParams: NavParams) {
    super();
    this.path = navParams.get('path');
    this.schema = navParams.get('schema');
    this.uischema = navParams.get('uischema');
    this.showHeader = nav === undefined;
  }

  ngOnInit() {
    const coreState = this.ngRedux.getState().jsonforms.core;
    const data = _.get(coreState.data, this.path);
    this.items = _.map(data, (item, idx) => {
      const path = `${this.path}.${idx}`;
      return {
        label: makeLabel(coreState.data, coreState.schema, path, this.schema),
        schema: this.schema.items,
        path
      }
    });
    console.log('items', this.items);
  }

  openDetails(item) {
    openDetails(this.ngRedux.getState().jsonforms.core, this.nav, item)
  }
}
