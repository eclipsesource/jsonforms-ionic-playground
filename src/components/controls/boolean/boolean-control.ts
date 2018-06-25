import {Component} from '@angular/core';
import {isBooleanControl, JsonFormsState, rankWith} from '@jsonforms/core';
import {NgRedux} from "@angular-redux/store";
import {JsonFormsIonicControl} from "../JsonFormsIonicControl";

@Component({
  selector: 'jsonforms-boolean-control',
  templateUrl: 'boolean-control.html'
})
export class BooleanControlRenderer extends JsonFormsIonicControl {
  constructor(ngRedux: NgRedux<JsonFormsState>) {
    super(ngRedux);
  }
}

export const booleanControlTester = rankWith(
  4,
  isBooleanControl
);
