import {
  computeLabel,
  ControlElement,
  isPlainLabel,
  JsonFormsState,
  JsonSchema,
  mapDispatchToControlProps,
  mapStateToControlProps,
  resolveSchema
} from '@jsonforms/core';
import * as _ from 'lodash';
import {JsonFormsBaseRenderer} from '@jsonforms/angular';
import {Input, OnDestroy, OnInit} from "@angular/core";
import {NgRedux} from "@angular-redux/store";
import {Subscription} from "rxjs/Subscription";
import {FormControl} from "@angular/forms";

export class JsonFormsIonicControl extends JsonFormsBaseRenderer implements OnInit, OnDestroy {

  onChange: (event?: any) => void;
  label: string;
  errors: any[] = [];
  value: any;
  disabled: boolean;
  subscription: Subscription;
  resolvedSchema: JsonSchema;
  uischema: ControlElement;
  @Input() path: string;
  form;
  error: string;

  constructor(protected ngRedux: NgRedux<JsonFormsState>) {
    super();
  }

  connectControlToJsonForms = (store, ownProps: any) =>
    store.select().map(state => {
      const props = mapStateToControlProps(state, ownProps);
      const dispatch = mapDispatchToControlProps(store.dispatch);
      return {...props, ...dispatch};
    });


  ngOnInit() {
    const ownProps = {
      ...this.getOwnProps(),
      path: this.path
    };
    const state$ = this.connectControlToJsonForms(this.ngRedux, ownProps);

    const props = mapStateToControlProps(this.ngRedux.getState(), ownProps);
    this.form = new FormControl(_.get(this.ngRedux.getState().jsonforms.core.data, props.path), { updateOn: 'change', validators: this.validate });

    this.subscription = state$.subscribe(state => {
      this.onChange = ev => {
        state.handleChange(state.path, ev.value);
      };
      this.errors = state.errors;
      this.error = state.errors.join('\n');

      this.label = computeLabel(
        isPlainLabel(state.label) ? state.label : state.label.default, state.required);



      const controlElement = state.uischema as ControlElement;
      this.path = state.path;
      this.uischema = state.uischema as ControlElement;
      this.resolvedSchema = resolveSchema(state.schema, controlElement.scope);
      this.schema = state.schema;
      this.value = state.data;
      this.disabled = !state.enabled;

      // these cause the correct update of the error underline
      this.form.markAsTouched();
      this.form.updateValueAndValidity();
    });
  }

  validate = () => {
    return this.errors.length > 0 ? ({ schema: this.errors[0] }) : null;
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
