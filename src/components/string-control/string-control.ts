import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  JsonFormsState, RankedTester,
  rankWith,
  computeLabel,
  isPlainLabel,
  formatErrorMessage,
  isControl
} from '@jsonforms/core';
import { JsonFormsBaseRenderer } from '@jsonforms/angular';
import { NgRedux } from "@angular-redux/store";
import { Subscription } from "rxjs/Subscription";
import { connectControlToJsonForms } from "../common";
import { TextInput } from "ionic-angular";

@Component({
  selector: 'jsonforms-string-control',
  templateUrl: 'string-control.html'
})
export class StringControlRenderer extends JsonFormsBaseRenderer implements OnInit, OnDestroy {
  onChange: (event?: any) => void;
  label: string;
  errors: string;
  value: any;
  description: string;
  disabled: boolean;
  @ViewChild(TextInput) textInput: TextInput;

  @Input() path: string;
  private subscription: Subscription;

  constructor(private ngRedux: NgRedux<JsonFormsState>) {
    super();
  }

  ngOnInit() {
    const ownProps = {
      ...this.getOwnProps(),
      path: this.path
    };
    const state$ = connectControlToJsonForms(this.ngRedux, ownProps);
    this.subscription = state$.subscribe(state => {
      this.onChange = ev => state.handleChange(state.path, ev.target.value);

      this.label = computeLabel(
        isPlainLabel(state.label) ? state.label : state.label.default, state.required);

      const isValid = state.errors.length === 0;
      if (!isValid) {
        // TODO
        // this.textInput.errorState = true;
      }

      this.errors = formatErrorMessage(state.errors);
      this.value = state.data;
      this.disabled = !state.enabled;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
export const stringControlTester: RankedTester = rankWith(1, isControl);
