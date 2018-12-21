# Getting started

0. Install ionic via `npm install -g ionic@3.9.2` (or follow instructions at [Installing Ionic](https://ionicframework.com/docs/intro/installation/))
1. Clone this repo
2. Install dependencies via `npm install`
3. Execute `ionic serve` (when asked about upgrading to 4.x, deny with "n"
4. Alternatively to 3., if you want to execute the app within the emulator, follow the instructions
   from the [Ionic Docs](https://ionicframework.com/docs/v1/guide/testing.html) (Make sure to have your $JAVA_HOME,
   $ANDROID_HOME environment variables configured).
   
# General usage

If you want to make use of the ionic-renderers in your own project, please follow these guidelines. We'll use a new project in the following:

1. Create a new project e.g. `ionic start todo blank`. 
2. Install dependencies:
```
npm i @jsonforms/core
npm i @jsonforms/angular
npm i @jsonforms/ionic-renderers
```
3. Open `src/app/app.module.ts`

   * Import `JsonFormsIonicModule` from `@jsonforms/ionic-renderer`
   * Add `JsonFormsIonicModule` to the `imports` section

As we'll fetch example via HTTP, repeat the steps for `HttpClientModule` (which
is available via `@angular/common/http`)

4. Create a `src/app/store.ts` with the following content:
   ```ts
   import { combineReducers, Reducer } from 'redux';
   import {
     jsonformsReducer,
     JsonFormsState
   } from '@jsonforms/core';
   import {ionicRenderers} from "@jsonforms/ionic-renderers";
   export const rootReducer: Reducer<JsonFormsState> = combineReducers({ jsonforms: jsonformsReducer() });
   export const initialState: any = {
     jsonforms: {
       renderers: ionicRenderers,
       fields: [],
     }
   };
   ```
   
5. Copy your JSON schema and UI schema JSON files to the `src/assets` folder.
   We'll refer to these files as `schema.json` and `ui-schema.json`, respectively.
   In a real-world scenario these schemas might be fetched from somewhere else of course.
   If you don't have any schemas at hand you can use 
   [these ones](https://github.com/eclipsesource/jsonforms-ionic-playground/tree/master/src/assets).

6. This step is optional, but if you want to initialize the rendered froms
   with pre-defined data, you'll need to declare/import it, such that we are 
   able to pass it to the store. If you are using the provided example JSON
   and UI schema, you may also make use of the example data provided
   [here](https://github.com/eclipsesource/jsonforms-ionic-playground/blob/master/src/app/data.ts),

7. Within the `src/app/app.module.ts` we'll now import the JSON schema and the 
   UI schema and initialize the store. First, let's make the necessary imports

   ```ts
   import { NgRedux } from "@angular-redux/store";
   import { HttpClient, HttpClientModule } from "@angular/common/http";
   import { Actions, JsonFormsState, UISchemaElement } from "@jsonforms/core";
   import { forkJoin } from "rxjs/observable/forkJoin";
   import { rootReducer, initialState } from "./store";
   import data from "./data"; // our example data
   ```
   
   Next, let's add a constructor:
   ```ts
   constructor(
     ngRedux: NgRedux<JsonFormsState>,
     http: HttpClient
   ) {
    // TODO  
   })
   ```

   Within the constructor of `AppModule`, let's setup the store:
   
   ```ts
   ngRedux.configureStore(rootReducer, initialState);
   ```
   
   Finally, grab the JSON and UI schema  and initialize our store:
   ```ts
   forkJoin(
     http.get("./assets/schema.json"),
     http.get("./assets/uischema.json")
   ).subscribe(([schema, uischema]) => {
     ngRedux.dispatch(
       Actions.init(
         data,
         schema,
         uischema as UISchemaElement,
       )
     );  
   });
   ```
8. Create a custom `JsonFormsPage` component in `src/app/jsonforms.page.ts` 
   which will replace the default `HomePage` in `app.components.ts`
 ```ts
 import {Component} from "@angular/core";
 @Component({
   selector: "jsonforms-page",
   template:  "<jsonforms-outlet></jsonforms-outlet>"
 })
 export class JsonFormsPage { }
 ```
 You'll also need to add the `JsonFormsPage` toe `declarations` property
 of the `AppModule`.
9. In `app.component.ts`, first import `JsonFormsPage`
 ```ts
 import { JsonFormsPage } from ""./jsonforms.page";
 ```
 Then change the assignment of `HomePage` to `JsonFormsPage`
 ```ts
 rootPage: any = JsonFormsPage;
 ```
10. Finally, start the application via `ionic serve` (if prompted to update to 4.x, neglect by entering `"n"`).


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

