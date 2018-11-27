import {Component} from '@angular/core';
import {JsonFormsControl} from "@jsonforms/angular";
import {NgRedux} from "@angular-redux/store";
import {JsonFormsState} from "@jsonforms/core";

@Component({
  selector:'jsonforms-data-page',
  template:  '<pre>{{stringifiedData}}</pre>'
})
export class DataDisplayPage extends JsonFormsControl {

  stringifiedData: string;

  constructor(protected ngRedux: NgRedux<JsonFormsState>) {
    super(ngRedux);
  }

  mapAdditionalProps(props) {
    this.stringifiedData = JSON.stringify(props.data, null, 2);
  }
}
