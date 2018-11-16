import { combineReducers, Reducer } from 'redux';
import {
  isEnumControl,
  jsonformsReducer,
  JsonFormsState,
  rankWith,
} from '@jsonforms/core';

import { listWithDetailTester, ListWithDetailControl } from "@jsonforms/ionic-renderers";
import { AutoCompleteControlRenderer } from "@jsonforms/ionic-renderers";

import { booleanControlTester, BooleanCheckboxControlRenderer } from "@jsonforms/ionic-renderers";
import { booleanToggleControlTester, BooleanToggleControlRenderer } from "@jsonforms/ionic-renderers";
import { multilineControlTester, MultilineControlRenderer } from "@jsonforms/ionic-renderers";
import { labelTester, LabelRenderer } from "@jsonforms/ionic-renderers";
import { stringControlTester, StringControlRenderer } from "@jsonforms/ionic-renderers";
import { numberControlTester, NumberControlRenderer } from "@jsonforms/ionic-renderers";
import { dateControlTester, DateControlRenderer } from "@jsonforms/ionic-renderers";
import { enumControlTester, EnumControlRenderer } from "@jsonforms/ionic-renderers";
import { rangeControlTester, RangeControlRenderer } from "@jsonforms/ionic-renderers";

import { horizontalLayoutTester, HorizontalLayoutRenderer } from "@jsonforms/ionic-renderers";
import { verticalLayoutTester, VerticalLayoutRenderer } from "@jsonforms/ionic-renderers";
import { categorizationTester, CategorizationTabLayoutRenderer } from "@jsonforms/ionic-renderers";
import { groupTester, GroupLayoutRenderer  } from "@jsonforms/ionic-renderers";

export const rootReducer: Reducer<JsonFormsState> = combineReducers({ jsonforms: jsonformsReducer() });

export const ionicRenderers: { tester: any, renderer: any }[] = [
  // controls
  { tester: booleanControlTester, renderer: BooleanCheckboxControlRenderer },
  { tester: booleanToggleControlTester, renderer: BooleanToggleControlRenderer },
  { tester: stringControlTester, renderer: StringControlRenderer },
  { tester: multilineControlTester, renderer: MultilineControlRenderer },
  { tester: numberControlTester, renderer: NumberControlRenderer },
  { tester: dateControlTester, renderer: DateControlRenderer },
  { tester: enumControlTester, renderer: EnumControlRenderer },
  { tester: rangeControlTester, renderer: RangeControlRenderer },
  { tester: rankWith(3, isEnumControl), renderer: AutoCompleteControlRenderer },

  // layouts
  { tester: horizontalLayoutTester, renderer: HorizontalLayoutRenderer },
  { tester: verticalLayoutTester, renderer: VerticalLayoutRenderer },
  { tester: categorizationTester, renderer: CategorizationTabLayoutRenderer },
  { tester: groupTester, renderer: GroupLayoutRenderer },

  // other
  { tester: listWithDetailTester, renderer: ListWithDetailControl },
  { tester: labelTester, renderer: LabelRenderer },
];

export const initialState: any = {
  jsonforms: {
    renderers: ionicRenderers,
    fields: [],
  }
};
