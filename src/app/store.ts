import { combineReducers, Reducer } from 'redux';
import {
  jsonformsReducer,
  JsonFormsState,
} from '@jsonforms/core';

import { masterDetailTester, MasterDetailComponent } from "@jsonforms/ionic-renderers";
import { labelTester, LabelRenderer} from "@jsonforms/ionic-renderers";

import { booleanControlTester, BooleanControlRenderer } from "@jsonforms/ionic-renderers";
import { stringControlTester, StringControlRenderer } from "@jsonforms/ionic-renderers";
import { numberControlTester, NumberControlRenderer } from "@jsonforms/ionic-renderers";
import { dateControlTester, DateControlRenderer } from "@jsonforms/ionic-renderers";
import { enumControlTester, EnumControlRenderer } from "@jsonforms/ionic-renderers";

import { horizontalLayoutTester, HorizontalLayoutRenderer } from "@jsonforms/ionic-renderers";
import { verticalLayoutTester, VerticalLayoutRenderer } from "@jsonforms/ionic-renderers";
import { categorizationTester, CategorizationLayoutRenderer } from "@jsonforms/ionic-renderers";
import { groupTester, GroupLayoutRenderer  } from "@jsonforms/ionic-renderers";

export const rootReducer: Reducer<JsonFormsState> = combineReducers({ jsonforms: jsonformsReducer() });

export const ionicRenderers: { tester: any, renderer: any }[] = [
  // controls
  { tester: booleanControlTester, renderer: BooleanControlRenderer },
  { tester: stringControlTester, renderer: StringControlRenderer },
  { tester: numberControlTester, renderer: NumberControlRenderer },
  { tester: dateControlTester, renderer: DateControlRenderer },
  { tester: enumControlTester, renderer: EnumControlRenderer },

  // layouts
  { tester: horizontalLayoutTester, renderer: HorizontalLayoutRenderer },
  { tester: verticalLayoutTester, renderer: VerticalLayoutRenderer },
  { tester: categorizationTester, renderer: CategorizationLayoutRenderer },
  { tester: groupTester, renderer: GroupLayoutRenderer },

  // other
  { tester: masterDetailTester, renderer: MasterDetailComponent },
  { tester: labelTester, renderer: LabelRenderer },
];

export const initialState: any = {
  jsonforms: {
    renderers: ionicRenderers,
    fields: [],
  }
};
