import {Component} from '@angular/core';
import {isBooleanControl, JsonFormsState, rankWith} from '@jsonforms/core';
import {NgRedux} from "@angular-redux/store";
import {JsonFormsIonicControl} from "../JsonFormsIonicControl";

@Component({
  selector: 'boolean',
  templateUrl: 'boolean.html'
})
export class BooleanComponent extends JsonFormsIonicControl {

  constructor(ngRedux: NgRedux<JsonFormsState>) {
    super(ngRedux);
  }
}

export const ionicBooleanControlTester = rankWith(
  4,
  isBooleanControl
);
