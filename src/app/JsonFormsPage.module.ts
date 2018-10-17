import { NgModule } from '@angular/core';
import {JsonFormsPage} from "./JsonFormsPage";
import {IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [
    JsonFormsPage
  ],
  imports: [
    IonicPageModule.forChild(JsonFormsPage),
  ],
  entryComponents: [
    JsonFormsPage
  ],
})
export class JsonFormsPageModule {}
