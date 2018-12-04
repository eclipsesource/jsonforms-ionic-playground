import {
  and,
  isControl,
  jsonformsReducer,
  JsonFormsState,
  optionIs,
  RankedTester,
  rankWith,
  schemaTypeIs,
  scopeEndsWith,
} from "@jsonforms/core";
import {ionicRenderers} from "@jsonforms/ionic-renderers";
import {combineReducers, Reducer} from "redux";

import {CustomAutocompleteControl} from "./custom.autocomplete.control";
import {DataDisplayPage} from "./custom.data-display.page";
import {LangPage} from "./lang.page";

export const rootReducer: Reducer<JsonFormsState> = combineReducers({ jsonforms: jsonformsReducer() });

const departmentTester: RankedTester = rankWith(5, and(
  schemaTypeIs("string"),
  scopeEndsWith("department")
));

export const initialState: any = {
  jsonforms: {
    fields: [],
    renderers: [
      ...ionicRenderers,
      { tester: departmentTester, renderer: CustomAutocompleteControl },
      {
        renderer: DataDisplayPage,
        tester: rankWith(
          6,
          and(
            isControl,
            scopeEndsWith("___data")
          )
        )
      },
      {
        renderer: LangPage,
        tester: rankWith(
          6,
          and(
            isControl,
            optionIs("lang", true)
          )
        )
      },
    ],
  }
};
