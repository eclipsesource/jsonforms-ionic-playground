import { NgModule } from '@angular/core';
import {JsonFormsPage} from "./JsonFormsPage";
import {IonicPageModule} from "ionic-angular";
import {IonicSelectableModule} from "ionic-selectable";

@NgModule({
  declarations: [
    JsonFormsPage
  ],
  imports: [
    IonicPageModule.forChild(JsonFormsPage),
    IonicSelectableModule
  ],
  entryComponents: [
    JsonFormsPage
  ],
})
export class JsonFormsPageModule {}
