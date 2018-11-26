import * as JsonRefs from 'json-refs';
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, isDevMode, NgModule} from '@angular/core';
import {DevToolsExtension, NgRedux} from '@angular-redux/store';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {Actions, JsonFormsState, UISchemaElement} from '@jsonforms/core';
import {JsonFormsIonicModule} from '@jsonforms/ionic-renderers';
import logger from 'redux-logger';
import { HttpClientModule, HttpClient } from "@angular/common/http";


import {initialState, rootReducer} from './store';
import data from './data';
import schema from './schema'

import {MyApp} from './app.component';
import {JsonFormsPage} from "./JsonFormsPage";
import {CustomAutocompleteControl} from "./custom.autocomplete.control";
import {DataDisplayPage} from "./custom.data-display.page";

@NgModule({
  declarations: [
    MyApp,
    JsonFormsPage,
    CustomAutocompleteControl,
    DataDisplayPage
  ],
  imports: [
    BrowserModule,
    JsonFormsIonicModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    JsonFormsPage,
    CustomAutocompleteControl,
    DataDisplayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ],
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<JsonFormsState>,
    devTools: DevToolsExtension,
    http: HttpClient
  ) {
    let enhancers = [];
    // ... add whatever other enhancers you want.

    // You probably only want to expose this tool in devMode.
    if (isDevMode() && devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }

    ngRedux.configureStore(
      rootReducer,
      initialState,
      [logger],
      enhancers
    );

    http.get("./assets/uischema.json").forEach(uischema => {
      JsonRefs.resolveRefs(schema)
        .then(
          res =>
            ngRedux.dispatch(Actions.init(
              data,
              res.resolved,
              uischema as UISchemaElement
            ))
        );
    });


    // uncomment to test live update
    /*
    setTimeout(() => {
      console.log("pushing additional category");
      uischema.elements.push({
        type: "Category",
        label: "Test",
        elements: []
      });
      JsonRefs.resolveRefs(schema)
        .then(
          res =>
            ngRedux.dispatch(Actions.init(
              data,
              res.resolved,
              uischema as UISchemaElement
            ))
        )
    }, 4000);
    */
  }
}
