import {Component, OnInit} from '@angular/core';
import {JsonFormsState, rankWith} from '@jsonforms/core';
import {JsonFormsBaseRenderer} from '@jsonforms/angular';
import {connectLayoutToJsonForms} from "../common";
import {NgRedux} from "@angular-redux/store";

/**
 * Generated class for the LabelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'label',
  templateUrl: 'label.html'
})
export class LabelRenderer extends JsonFormsBaseRenderer implements OnInit {

  label: string;
  private subscription;

  constructor(private ngRedux: NgRedux<JsonFormsState>) {
    super()
  }

  ngOnInit() {
    // TODO: layout..
    const state$ = connectLayoutToJsonForms(this.ngRedux, this.getOwnProps());
    this.subscription = state$.subscribe(state => {
      this.label = state.uischema.label
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

export const ionicLabelTester = rankWith(4, (uischema, schema) => uischema.type === 'Label');
