import { combineReducers, Reducer } from 'redux';
import {
  RankedTester,
  jsonformsReducer,
  JsonFormsState,
} from '@jsonforms/core';
import {
  default as IonicVerticalLayoutRenderer,
  ionicVerticalLayoutTester
} from "../components/vertical-layout/vertical-layout";
import {CategorizationRenderer, categorizationTester} from "../components/categorization/categorization";
import {stringControlTester, StringControlRenderer} from "../components/string-control/string-control";
import {
  default as IonicHorizontalLayoutRenderer,
  ionicHorizontalLayoutTester
} from "../components/horizontal-layout/horizontal-layout";
import {ArrayControlRenderer, ionicArrayControlTester} from "../components/array-control/array-control";
import {ionicMasterDetailControlTester, MasterDetailComponent} from "../components/master-detail/master-detail";
import {GroupComponent, ionicGroupTester} from "../components/group/group";

export const rootReducer: Reducer<JsonFormsState> = combineReducers({ jsonforms: jsonformsReducer() });

export const ionicRenderers: { tester: RankedTester; renderer: any }[] = [
  { tester: ionicVerticalLayoutTester, renderer: IonicVerticalLayoutRenderer },
  { tester: ionicHorizontalLayoutTester, renderer: IonicHorizontalLayoutRenderer },
  { tester: ionicGroupTester, renderer: GroupComponent },
  { tester: categorizationTester, renderer: CategorizationRenderer },
  { tester: stringControlTester, renderer: StringControlRenderer },
  { tester: ionicArrayControlTester, renderer: ArrayControlRenderer },
  { tester: ionicMasterDetailControlTester, renderer: MasterDetailComponent },
];

export const initialState: any = {
  jsonforms: {
    renderers: ionicRenderers,
    fields: [],
  }
};
