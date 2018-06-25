import {Component, OnDestroy, OnInit} from '@angular/core';
import {JsonFormsState, rankWith} from '@jsonforms/core';
import {JsonFormsBaseRenderer} from '@jsonforms/angular';
import {connectLayoutToJsonForms} from "../common";
import {NgRedux} from "@angular-redux/store";

@Component({
  selector: 'label',
  templateUrl: 'label.html'
})
export class LabelRenderer extends JsonFormsBaseRenderer implements OnInit, OnDestroy {

  label: string;
  private subscription;

  constructor(private ngRedux: NgRedux<JsonFormsState>) {
    super()
  }

  ngOnInit() {
    // TODO: this is using connectLayoutToJsonForms
    const state$ = connectLayoutToJsonForms(this.ngRedux, this.getOwnProps());
    this.subscription = state$.subscribe(state => {
      this.label = state.uischema.label
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

export const ionicLabelTester = rankWith(4, (uischema) => uischema !== undefined && uischema.type === 'Label');
