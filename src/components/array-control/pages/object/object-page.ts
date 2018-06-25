import {Component, OnInit, Optional} from '@angular/core';
import * as _ from 'lodash';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Paths, JsonFormsState} from '@jsonforms/core';
import {NgRedux} from "@angular-redux/store";
import {AbstractDetailPage} from "../../../master-detail/pages/AbstractDetailPage";
import {makeLabel, openDetails} from "../common-array-utils";

@IonicPage()
@Component({
  selector: 'jsonforms-array-object-page',
  templateUrl: 'object-page.html',
})
export class ObjectPage extends AbstractDetailPage implements OnInit {

  props: any[] = [];
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
    const schemaProps = this.schema.properties;
    this.props = _.map(_.keys(schemaProps), propName => {
      const path = Paths.compose(this.path, propName);
      return {
        label: makeLabel(coreState.data, coreState.schema, path, this.schema),
        schema: schemaProps[propName],
        path
      }
    });
  }

  openDetails(item) {
    openDetails(this.ngRedux.getState().jsonforms.core, this.nav, item)
  }
}

