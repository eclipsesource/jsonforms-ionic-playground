import {computeLabel, ControlElement, formatErrorMessage, isPlainLabel, JsonFormsState, JsonSchema, resolveSchema} from '@jsonforms/core';
import {JsonFormsBaseRenderer} from '@jsonforms/angular';
import {Input, OnDestroy, OnInit} from "@angular/core";
import {connectControlToJsonForms} from "./common";
import {NgRedux} from "@angular-redux/store";
import {Subscription} from "rxjs/Subscription";

export class JsonFormsIonicControl extends JsonFormsBaseRenderer implements OnInit, OnDestroy {

  onChange: (event?: any) => void;
  label: string;
  errors: string;
  value: any;
  disabled: boolean;
  subscription: Subscription;
  resolvedSchema: JsonSchema;
  uischema: ControlElement;
  @Input() path: string;

  constructor(protected ngRedux: NgRedux<JsonFormsState>) {
    super();
  }

  ngOnInit() {
    const ownProps = {
      ...this.getOwnProps(),
      path: this.path
    };
    const state$ = connectControlToJsonForms(this.ngRedux, ownProps);
    this.subscription = state$.subscribe(state => {
      this.onChange = ev => {
        console.log('handle change ', ev);
        state.handleChange(state.path, ev.value);
      };

      this.label = computeLabel(
        isPlainLabel(state.label) ? state.label : state.label.default, state.required);

      const isValid = state.errors.length === 0;
      if (!isValid) {
        // TODO
        // this.textInput.errorState = true;
      }

      const controlElement = state.uischema as ControlElement;
      this.path = state.path;
      this.uischema = state.uischema as ControlElement;
      this.resolvedSchema = resolveSchema(state.schema, controlElement.scope);
      this.schema = state.schema;
      this.errors = formatErrorMessage(state.errors);
      this.value = state.data;
      this.disabled = !state.enabled;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
