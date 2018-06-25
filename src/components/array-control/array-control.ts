import {AfterViewInit, Component, Optional, ViewChild} from '@angular/core';
import {isArrayObjectControl, JsonFormsState, rankWith,} from '@jsonforms/core';

import {NgRedux} from "@angular-redux/store";
import {Nav, NavController, NavParams} from "ionic-angular";
import {isSchemaArray, removeSchemaKeywords} from "../common";
import {JsonFormsIonicControl} from "../JsonFormsIonicControl";
import {ArrayPage} from "./pages/array/array-page";
import {ObjectPage} from "./pages/object/object-page";

/**
 * Display an array via nav component
 *
 */
@Component({
  selector: 'array-control',
  templateUrl: 'array-control.html'
})
export class ArrayControlRenderer extends JsonFormsIonicControl implements AfterViewInit {

  @ViewChild('nav') nav: Nav;
  private navController;
  showNav: boolean;

  constructor(
    @Optional() private parentNav: NavController,
    @Optional() private navParams: NavParams,
    ngRedux: NgRedux<JsonFormsState>) {

    super(ngRedux);
  }

  ngAfterViewInit() {
    const uischema = this.uischema.options.detail;
    if (isSchemaArray(this.resolvedSchema)) {
      (this.navController || this.nav).push(
        ArrayPage,
        {
          showNav: this.showNav,
          label: this.label,
          schema: this.resolvedSchema,
          path: this.path,
          uischema
        }
      )
    } else {
      (this.navController || this.nav).push(
        ObjectPage,
        {
          showNav: this.showNav,
          label: this.label,
          schema: this.resolvedSchema,
          path: this.path,
          uischema
        }
      )
    }
  }
}

export const ionicArrayControlTester = rankWith(
  2,
  isArrayObjectControl
);
