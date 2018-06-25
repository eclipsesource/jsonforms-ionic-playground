import { combineReducers, Reducer } from 'redux';
import {
  RankedTester,
  jsonformsReducer,
  JsonFormsState,
} from '@jsonforms/core';

import { masterDetailTester, MasterDetailComponent} from "../components/other/master-detail/master-detail";
import { labelTester, LabelRenderer} from "../components/other/label/label";

import { booleanControlTester, BooleanControlRenderer } from "../components/controls/boolean/boolean-control";
import { stringControlTester, StringControlRenderer } from "../components/controls/string/string-control";
import { numberControlTester, NumberControlRenderer } from "../components/controls/number/number-control";
import { dateControlTester, DateControlRenderer } from "../components/controls/date/date-control";
import { enumControlTester, EnumControlRenderer } from "../components/controls/enum/enum-control";

import { horizontalLayoutTester, HorizontalLayoutRenderer } from "../components/layouts/horizontal/horizontal-layout";
import { verticalLayoutTester, VerticalLayoutRenderer } from "../components/layouts/vertical/vertical-layout";
import { categorizationTester, CategorizationLayoutRenderer } from "../components/layouts/categorization/categorization-layout";
import { groupTester, GroupLayoutRenderer  } from "../components/layouts/group/group-layout";

export const rootReducer: Reducer<JsonFormsState> = combineReducers({ jsonforms: jsonformsReducer() });

export const ionicRenderers: { tester: RankedTester; renderer: any }[] = [
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
