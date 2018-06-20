import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import {
  computeLabel,
  ControlElement,
  formatErrorMessage,
  isArrayObjectControl,
  isPlainLabel,
  JsonFormsState,
  rankWith,
  resolveSchema,
  toDataPath,
  UISchemaElement
} from '@jsonforms/core';
import {JsonFormsBaseRenderer} from '@jsonforms/angular';

import {NgRedux} from "@angular-redux/store";
import {Subscription} from "rxjs/Subscription";


import {Nav} from "ionic-angular";
import {RootPage} from "./RootPage";
import {connectControlToJsonForms} from "../common";

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
export class ArrayControlRenderer extends JsonFormsBaseRenderer implements OnInit, AfterViewInit {

  @ViewChild('nav') nav: Nav;

  private subscription: Subscription;
  private listItems: any[];
  private onChange;
  private resolvedSchema;

  constructor(private ngRedux: NgRedux<JsonFormsState>) {
    super();
  }

  ngOnInit() {
    const state$ = connectControlToJsonForms(this.ngRedux, this.getOwnProps());
    this.subscription = state$.subscribe(state => {
      this.onChange = ev => state.handleChange(state.path, ev.target.value);

      // this.label = computeLabel(
      //   isPlainLabel(state.label) ? state.label : state.label.default, state.required);

      const isValid = state.errors.length === 0;
      if (!isValid) {
        // this.textInput.errorState = true;
      }

      // this.errors = formatErrorMessage(state.errors);
      // this.value = state.data;
      // this.disabled = !state.enabled;

      // this.schema = state.schema;
      const controlElement = state.uischema as ControlElement;
      this.resolvedSchema = resolveSchema(state.schema, controlElement.scope);
      // console.log('resolved schema', this.resolvedSchema);
      // this.description = resolvedSchema.description === undefined ?
      //   '' : resolvedSchema.description;
      const labelPath = toDataPath((state.uischema as UISchemaElement).options.labelRef);
      const instancePath = toDataPath((state.uischema as ControlElement).scope);
      this.listItems = state.data.map((d, index) => ({
        label: _.get(d, labelPath),
        path: `${instancePath}.${index}`,
        data: d
      }));
    });
  }

  ngAfterViewInit() {
    this.nav.push(RootPage, {
      listItems: this.listItems,
      schema: this.resolvedSchema
    })
  }
}

export const ionicArrayControlTester = rankWith(4, isArrayObjectControl);
