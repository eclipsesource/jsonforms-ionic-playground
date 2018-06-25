import {Component} from '@angular/core';
import {isDateControl, JsonFormsState, rankWith} from '@jsonforms/core';
import {NgRedux} from "@angular-redux/store";
import {JsonFormsIonicControl} from "../JsonFormsIonicControl";

@Component({
  selector: 'jsonforms-date-control',
  templateUrl: 'date-control.html'
})
export class DateControlRenderer extends JsonFormsIonicControl {

  constructor(ngRedux: NgRedux<JsonFormsState>) {
    super(ngRedux);
  }
}

export const dateControlTester = rankWith(
  4,
  isDateControl
);
