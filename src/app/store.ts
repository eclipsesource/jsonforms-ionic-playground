import {combineReducers, Reducer} from 'redux';
import {
  and,
  jsonformsReducer,
  JsonFormsState,
  RankedTester,
  rankWith,
  schemaTypeIs,
  scopeEndsWith,
} from '@jsonforms/core';

import {ionicRenderers} from "@jsonforms/ionic-renderers";
import {CustomAutocompleteControl} from "./custom.autocomplete.control";

export const rootReducer: Reducer<JsonFormsState> = combineReducers({ jsonforms: jsonformsReducer() });

const departmentTester: RankedTester = rankWith(5, and(
  schemaTypeIs('string'),
  scopeEndsWith('department')
));


export const initialState: any = {
  jsonforms: {
    renderers: [
      ...ionicRenderers,
      { tester: departmentTester, renderer: CustomAutocompleteControl }
    ],
    fields: [],
  }
};
