import {GroupLayout, JsonFormsState, rankWith, StatePropsOfLayout, uiTypeIs} from '@jsonforms/core';
import {Component, Input} from '@angular/core';
import {NgRedux} from "@angular-redux/store";
import {JsonFormsIonicLayout} from "../JsonFormsIonicLayout";

/**
 * Generated class for the GroupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'jsonforms-group-layout',
  templateUrl: 'group-layout.html'
})
export class GroupLayoutRenderer extends JsonFormsIonicLayout {

  @Input() path: string;
  private label: string;
  private stateProps: StatePropsOfLayout;

  constructor(ngRedux: NgRedux<JsonFormsState>) {
    super(ngRedux);
  }

  ngOnInit() {
    const ownProps = {
      ...this.getOwnProps(),
      path: this.path
    };
    const state$ = this.connectLayoutToJsonForms(this.ngRedux, ownProps);
    this.subscription = state$.subscribe(state => {
      this.stateProps = state;
      this.label = (ownProps.uischema as GroupLayout).label;
    });
  }
}

export const groupTester = rankWith(1, uiTypeIs('Group'));
