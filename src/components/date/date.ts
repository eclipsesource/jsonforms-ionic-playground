import {Component} from '@angular/core';
import {isDateControl, JsonFormsState, rankWith} from '@jsonforms/core';
import {NgRedux} from "@angular-redux/store";
import {JsonFormsIonicControl} from "../JsonFormsIonicControl";

/**
 * Generated class for the DateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'date',
  templateUrl: 'date.html'
})
export class DateComponent extends JsonFormsIonicControl {

  constructor(ngRedux: NgRedux<JsonFormsState>) {
    super(ngRedux);
  }
}

export const ionicDateControlTester = rankWith(
  4,
  isDateControl
);
