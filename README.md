# Getting started

0. Install ionic via `npm install -g ionic@3.9.2` (or follow instructions at [Installing Ionic](https://ionicframework.com/docs/intro/installation/))
1. Clone this repo
2. Install dependencies via `npm install`
3. Execute `ionic serve`. Alternatively, if you want to execute the app within the emulator, follow the instructions
   from the [Ionic Docs](https://ionicframework.com/docs/v1/guide/testing.html) (Make sure to have your $JAVA_HOME,
   $ANDROID_HOME environment variables configured).
   
# General usage

If you want to make use of the ionic-renderers in your own project, please follow these guidelines:

1. Install dependencies
   * `npm i @jsonforms/core`
   * `npm i @jsonforms/angular`
   * `npm i @jsonforms/ionic-renderers`
2. Import `JsonFormsIonicModule` and add it to the `imports` section
3. Create a store configuration (TODO: this should really be already provided by the framework), e.g. in a file called `store.ts`
   ```ts
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
   ```
4. Initialize the store via ngRedux (e.g. within `ngOnInit` of your app module)
   ```ts
    import {Actions} from '@jsonforms/core';
    import {initialState, rootReducer} from './store';
   
    ngRedux.configureStore(
      rootReducer,
      initialState
    );
    
    ngRedux.dispatch(
      Actions.init(
        data,
        schema
        uischema
      )
    );
   ```

# Covered Features

## Layouts
* [Vertical Layout](https://github.com/eclipsesource/jsonforms/blob/master/packages/ionic/src/layouts/vertical/vertical-layout.ts)
* [Horizontal Layout](https://github.com/eclipsesource/jsonforms/blob/master/packages/ionic/src/layouts/horizontal/horizontal-layout.ts)
* [Group](https://github.com/eclipsesource/jsonforms/blob/master/packages/ionic/src/layouts/group/group-layout.ts)
* [Categorization (via Tabs)](https://github.com/eclipsesource/jsonforms/tree/master/packages/ionic/src/layouts/categorization)

## Controls
* [ListWithDetail](https://github.com/eclipsesource/jsonforms/blob/master/packages/ionic/src/other/list-with-detail/list-with-detail-control.ts) 
  (a master/detail view where the master is rendered as a flat list)
* Booleans
  * [Checkbox](https://github.com/eclipsesource/jsonforms/blob/master/packages/ionic/src/controls/boolean/boolean-checkbox-control.ts)
  * [Toggle](https://github.com/eclipsesource/jsonforms/blob/master/packages/ionic/src/controls/boolean/boolean-toggle-control.ts)
* Strings
  * [String](https://github.com/eclipsesource/jsonforms/blob/master/packages/ionic/src/controls/string/string-control.ts) (with format support for email/telephone)
  * [Multiline string](https://github.com/eclipsesource/jsonforms/blob/master/packages/ionic/src/controls/string/multiline-control.ts)
* [Date](https://github.com/eclipsesource/jsonforms/blob/master/packages/ionic/src/controls/date/date-control.ts)
* Numbers
  * [Number](https://github.com/eclipsesource/jsonforms/blob/master/packages/ionic/src/controls/number/number-control.ts)
  * [Range](https://github.com/eclipsesource/jsonforms/blob/master/packages/ionic/src/controls/range/range-control.ts)
* Enums (for strings/numbers)
  * [Select](https://github.com/eclipsesource/jsonforms/blob/master/packages/ionic/src/controls/enum/enum-control.ts)
  * [Autocomplete](https://github.com/eclipsesource/jsonforms/blob/master/packages/ionic/src/controls/enum/autocomplete-control.ts) (customizable)
* [Labels](https://github.com/eclipsesource/jsonforms/blob/master/packages/ionic/src/other/label/label.ts)    

