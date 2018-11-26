import {combineReducers, Reducer} from 'redux';
import {
  and, isControl,
  jsonformsReducer,
  JsonFormsState, optionIs,
  RankedTester,
  rankWith,
  schemaTypeIs,
  scopeEndsWith,
} from '@jsonforms/core';

import {ionicRenderers} from "@jsonforms/ionic-renderers";
import {CustomAutocompleteControl} from "./custom.autocomplete.control";
import {DataDisplayPage} from "./custom.data-display.page";

export const rootReducer: Reducer<JsonFormsState> = combineReducers({ jsonforms: jsonformsReducer() });

const departmentTester: RankedTester = rankWith(5, and(
  schemaTypeIs('string'),
  scopeEndsWith('department')
));


export const initialState: any = {
  jsonforms: {
    renderers: [
      ...ionicRenderers,
      { tester: departmentTester, renderer: CustomAutocompleteControl },
      {
        tester: rankWith(6,
          and(
            isControl,
            optionIs('custom', true)
          )
        ), renderer: DataDisplayPage
      },
    ],
    fields: [],
  }
};
