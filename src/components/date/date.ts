import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  computeLabel,
  isDateControl,
  isPlainLabel,
  formatErrorMessage,
  JsonFormsState,
  rankWith
} from '@jsonforms/core';
import { JsonFormsBaseRenderer } from '@jsonforms/angular';
import {NgRedux} from "@angular-redux/store";
import {connectControlToJsonForms} from "../common";

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
export class DateComponent extends JsonFormsBaseRenderer implements OnInit, OnDestroy {

  // TODO: common control class?
  private subscription;
  private onChange;
  private path;
  private label;
  private errors;
  private value;
  private disabled;

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

export const ionicDateControlTester = rankWith(
  4,
  isDateControl
);
