import * as JsonRefs from 'json-refs';
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, isDevMode, NgModule} from '@angular/core';
import {DevToolsExtension, NgRedux} from '@angular-redux/store';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {Actions, JsonFormsState, UISchemaElement} from '@jsonforms/core';
import { JsonFormsModule } from '@jsonforms/angular';
import { JsonFormsIonicModule } from '@jsonforms/ionic-renderers';
import logger from 'redux-logger'

import { initialState, rootReducer } from './store';
import data from './data';
import schema from './schema'
import uischema from './uischema';

import {MyApp} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MasterDetailNavService} from "@jsonforms/ionic-renderers";

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    JsonFormsModule,
    JsonFormsIonicModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MasterDetailNavService
  ]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<JsonFormsState>,
    devTools: DevToolsExtension
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

    JsonRefs.resolveRefs(schema)
      .then(
        res =>
          ngRedux.dispatch(Actions.init(
            data,
            res.resolved,
            // TODO: cast shouldn't be necessary
            uischema as UISchemaElement
          ))
      )
  }
}
