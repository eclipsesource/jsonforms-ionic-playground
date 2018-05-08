import * as _ from 'lodash';
import {Component, OnInit, ViewChild} from '@angular/core';
import {
  ControlElement,
  Generate,
  JsonFormsState,
  isArrayObjectControl,
  rankWith,
  resolveSchema,
  toDataPath,
  VerticalLayout
} from '@jsonforms/core';
import { JsonFormsBaseRenderer } from '@jsonforms/angular';
import {Nav} from "ionic-angular";
import {NavProxyService} from "./NavProxyService";
import {ItemsPage} from "./pages/items/items";
import {PlaceholderPage} from "./pages/placeholder/placeholder";
import {connectControlToJsonForms} from "../common";
import {NgRedux} from "@angular-redux/store";

// NOTE: this implementation is based on
// https://medium.com/@blewpri/master-detail-with-ionic-3-split-panes-866293608d47
@Component({
  selector: 'jsonforms-master-detail',
  templateUrl: 'master-detail.html'
})
export class MasterDetailComponent extends JsonFormsBaseRenderer implements OnInit {

  @ViewChild('masterNav') masterNav: Nav;
  @ViewChild('detailNav') detailNav: Nav;

  masterPage: any;
  detailPage: any;

  private subscription;
  private listItems: any[];

  constructor(private navProxy: NavProxyService, private ngRedux: NgRedux<JsonFormsState>) {
    super();
  }

  ngOnInit() {
    this.navProxy.masterNav = this.masterNav;
    this.navProxy.detailNav = this.detailNav;

    const state$ = connectControlToJsonForms(this.ngRedux, this.getOwnProps());
    this.subscription = state$.subscribe(state => {

      const controlElement = state.uischema as ControlElement;
      const labelRefInstancePath = toDataPath(controlElement.options.labelRef);
      const instancePath = toDataPath(`${controlElement.scope}/items`);
      const resolvedSchema = resolveSchema(state.schema, `${controlElement.scope}/items`);
      const detailUISchema =
        controlElement.options.detail
        || (Generate.uiSchema(resolvedSchema, 'VerticalLayout') as VerticalLayout).elements;

      this.listItems = state.data.map((d, index) => {
        return {
          label: _.get(d, labelRefInstancePath),
          data: d,
          path: `${instancePath}.${index}`,
          schema: resolvedSchema,
          uischema: detailUISchema
        }
      });
       this.masterNav.setRoot(ItemsPage, {
        detailNavCtrl: this.detailNav,
        items: this.listItems
      });
      this.detailNav.setRoot(PlaceholderPage);
    });
  }

  onChange(event) {
    this.navProxy.onSplitPaneChanged(event._visible);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


export const ionicMasterDetailControlTester = rankWith(3, isArrayObjectControl);
