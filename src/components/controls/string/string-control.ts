import {Component, ViewChild} from '@angular/core';
import { JsonFormsState } from '@jsonforms/core';
import {isControl, RankedTester, rankWith} from '@jsonforms/core';
import {TextInput} from "ionic-angular";
import {JsonFormsIonicControl} from "../JsonFormsIonicControl";
import {NgRedux} from "@angular-redux/store";

@Component({
  selector: 'jsonforms-string-control',
  templateUrl: 'string-control.html'
})
export class StringControlRenderer extends JsonFormsIonicControl {

  @ViewChild(TextInput) textInput: TextInput;

  constructor(ngRedux: NgRedux<JsonFormsState>) {
    super(ngRedux);
  }
}

export const stringControlTester: RankedTester = rankWith(
  1,
  isControl
);
