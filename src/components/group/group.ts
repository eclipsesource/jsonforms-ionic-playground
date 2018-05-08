import { GroupLayout, JsonFormsState, rankWith, StatePropsOfLayout, uiTypeIs  } from '@jsonforms/core';
import { JsonFormsBaseRenderer } from '@jsonforms/angular';
import {Component, Input} from '@angular/core';
import {connectLayoutToJsonForms} from "../common";
import {NgRedux} from "@angular-redux/store";

/**
 * Generated class for the GroupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'group',
  templateUrl: 'group.html'
})
export class GroupComponent extends JsonFormsBaseRenderer {

  @Input() path: string;
  private label: string;
  private stateProps: StatePropsOfLayout;
  private subscription;

  constructor(private ngRedux: NgRedux<JsonFormsState>) {
    super();
  }

  ngOnInit() {
    const ownProps = {
      ...this.getOwnProps(),
      path: this.path
    };
    const state$ = connectLayoutToJsonForms(this.ngRedux, ownProps);
    this.subscription = state$.subscribe(state => {
      this.stateProps = state;
      this.label = (ownProps.uischema as GroupLayout).label;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

export const ionicGroupTester = rankWith(1, uiTypeIs('Group'));
