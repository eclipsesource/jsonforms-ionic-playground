import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { HorizontalLayout, JsonFormsState, RankedTester, rankWith, StatePropsOfLayout, uiTypeIs} from '@jsonforms/core';
import { JsonFormsBaseRenderer } from '@jsonforms/angular';
import {connectLayoutToJsonForms} from "../common";
import {NgRedux} from "@angular-redux/store";

@Component({
  selector: 'horizontal-layout',
  templateUrl: 'horizontal-layout.html'
})
export class IonicHorizontalLayoutRenderer extends JsonFormsBaseRenderer
  implements OnInit, OnDestroy {

  @Input() path: string;
  @Input() schema;

  private stateProps: StatePropsOfLayout;
  private subscription;
  private elements;

  constructor(private ngRedux: NgRedux<JsonFormsState>) {
    super();
  }

  ngOnInit() {
    const ownProps = {
      ...this.getOwnProps(),
      path: this.path
    };
    const state$ = connectLayoutToJsonForms(this.ngRedux, ownProps);
    this.elements = (this.getOwnProps().uischema as HorizontalLayout).elements;
    this.subscription = state$.subscribe(state => {
      this.stateProps = state;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

export default IonicHorizontalLayoutRenderer;

export const ionicHorizontalLayoutTester: RankedTester = rankWith(1, uiTypeIs('HorizontalLayout'));
