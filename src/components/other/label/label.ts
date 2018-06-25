import {Component} from '@angular/core';
import {JsonFormsState, rankWith} from '@jsonforms/core';
import {NgRedux} from "@angular-redux/store";
import {JsonFormsIonicLayout} from "../../layouts/JsonFormsIonicLayout";

@Component({
  selector: 'label',
  templateUrl: 'label.html'
})
export class LabelRenderer extends JsonFormsIonicLayout {

  label: string;

  constructor(ngRedux: NgRedux<JsonFormsState>) {
    super(ngRedux)
  }

  ngOnInit() {
    // TODO: this is using connectLayoutToJsonForms
    const state$ = this.connectLayoutToJsonForms(this.ngRedux, this.getOwnProps());
    this.subscription = state$.subscribe(state => {
      this.label = state.uischema.label
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

export const labelTester = rankWith(4, (uischema) => uischema !== undefined && uischema.type === 'Label');
