import {Component, ViewChild} from '@angular/core';
import { JsonFormsState } from '@jsonforms/core';
import { isNumberControl, RankedTester, rankWith} from '@jsonforms/core';
import {TextInput} from "ionic-angular";
import {JsonFormsIonicControl} from "../JsonFormsIonicControl";
import {NgRedux} from "@angular-redux/store";

@Component({
  selector: 'jsonforms-number-control',
  templateUrl: 'number.html'
})
export class NumberControlRenderer extends JsonFormsIonicControl {

  @ViewChild(TextInput) textInput: TextInput;

  constructor(ngRedux: NgRedux<JsonFormsState>) {
    super(ngRedux);
  }
}

export const ionicNumberControlTester: RankedTester = rankWith(
  2,
  isNumberControl
);
