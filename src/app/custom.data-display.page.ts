import {NgRedux} from "@angular-redux/store";
import {Component} from "@angular/core";
import {JsonFormsControl} from "@jsonforms/angular";
import {ControlProps, JsonFormsState} from "@jsonforms/core";

@Component({
  selector: "jsonforms-data-page",
  template:  "<pre>{{dataAsString}}</pre>"
})
export class DataDisplayPage extends JsonFormsControl {

  private dataAsString: string;

  constructor(protected ngRedux: NgRedux<JsonFormsState>) {
    super(ngRedux);
  }

  public mapAdditionalProps(props: ControlProps) {
    this.dataAsString = JSON.stringify(props.data, null, 2);
  }
}
