import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RankedTester, rankWith, uiTypeIs } from '@jsonforms/core';
import { JsonFormsBaseRenderer } from '@jsonforms/angular';
import { JsonFormsState, StatePropsOfLayout } from '@jsonforms/core';
import { NgRedux } from '@angular-redux/store';
import { connectLayoutToJsonForms } from "../common";

@Component({
  selector: 'jsonforms-vertical-layout',
  templateUrl: 'vertical-layout.html'
})
export class IonicVerticalLayoutRenderer extends JsonFormsBaseRenderer implements OnInit, OnDestroy {

  @Input() path: string;
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
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

export default IonicVerticalLayoutRenderer;

export const ionicVerticalLayoutTester: RankedTester = rankWith(1, uiTypeIs('VerticalLayout'));
