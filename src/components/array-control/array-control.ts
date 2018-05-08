import {Component, OnInit, ViewChild} from '@angular/core';
import {
  computeLabel,
  ControlElement,
  formatErrorMessage,
  isPlainLabel,
  isArrayObjectControl,
  JsonFormsState,
  rankWith,
  resolveSchema,
  toDataPath,
  UISchemaElement
} from '@jsonforms/core';
import { JsonFormsBaseRenderer } from '@jsonforms/angular';
import {connectControlToJsonForms} from "../common";
import {NgRedux} from "@angular-redux/store";
import {Subscription} from "rxjs/Subscription";
import * as _ from 'lodash';

import {NavController} from "ionic-angular";
import {JsonFormsDispatch} from "../jsonforms-dispatch/jsonforms-dispatch";

/**
 * Generated class for the ArrayControlComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'array-control',
  templateUrl: 'array-control.html'
})
export class ArrayControlRenderer extends JsonFormsBaseRenderer implements OnInit {

  private value: any[];
  private disabled: boolean;
  private errors: string;
  private label: string;
  private onChange;
  private subscription: Subscription;
  private description;

  private listItems: any[];

  constructor(private nav: NavController, private ngRedux: NgRedux<JsonFormsState>) {
    super();
  }

  ngOnInit() {
    const state$ = connectControlToJsonForms(this.ngRedux, this.getOwnProps());
    this.subscription = state$.subscribe(state => {
      this.onChange = ev => state.handleChange(state.path, ev.target.value);

      this.label = computeLabel(
        isPlainLabel(state.label) ? state.label : state.label.default, state.required);

      const isValid = state.errors.length === 0;
      if (!isValid) {
        // this.textInput.errorState = true;
      }

      this.errors = formatErrorMessage(state.errors);
      this.value = state.data;
      this.disabled = !state.enabled;

      const controlElement = state.uischema as ControlElement;
      // const resolvedSchema =
      //   resolveSchema(state.schema, controlElement.scope);
      // this.description = resolvedSchema.description === undefined ?
      //   '' : resolvedSchema.description;
      const instancePath = toDataPath((state.uischema as UISchemaElement).options.labelRef);
      this.listItems = state.data.map(d => ({
        label: _.get(d, instancePath),
        data: d
      }));
      console.log(this.listItems)
    });
  }

  openDetails(uischema) {
    this.nav.push(JsonFormsDispatch, { uischema });
  }
}

export const ionicArrayControlTester = rankWith(2, isArrayObjectControl);
