import {DevToolsExtension, NgRedux} from "@angular-redux/store";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {ErrorHandler, isDevMode, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {Actions, JsonFormsState, setLocale, UISchemaElement} from "@jsonforms/core";
import {JsonFormsIonicModule} from "@jsonforms/ionic-renderers";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import * as JsonRefs from "json-refs";
import {forkJoin} from "rxjs/observable/forkJoin";
import logger from "redux-logger";

import {MyApp} from "./app.component";
import {CustomAutocompleteControl} from "./custom.autocomplete.control";
import {DataDisplayPage} from "./custom.data-display.page";
import data from "./data";
import {JsonFormsPage} from "./JsonFormsPage";
import {initialState, rootReducer} from "./store";
import {LangPage} from "./lang.page";

@NgModule({
  bootstrap: [IonicApp],
  declarations: [
    MyApp,
    JsonFormsPage,
    CustomAutocompleteControl,
    DataDisplayPage,
    LangPage
  ],
  entryComponents: [
    MyApp,
    JsonFormsPage,
    CustomAutocompleteControl,
    DataDisplayPage,
    LangPage
  ],
  imports: [
    BrowserModule,
    JsonFormsIonicModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
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

    ngRedux.dispatch(setLocale('de-DE'));

    forkJoin(
      http.get("./assets/uischema.json"),
      http.get("./assets/schema.json")
    ).subscribe(([uischema, schema]) => {
      JsonRefs.resolveRefs(schema)
        .then(
          (res: any) =>
            ngRedux.dispatch(
              Actions.init(
                data,
                res.resolved,
                uischema as UISchemaElement,
              )
            )
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
