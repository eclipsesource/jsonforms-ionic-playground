import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {JsonFormsPage} from "./JsonFormsPage";

@NgModule({
  declarations: [
    JsonFormsPage
  ],
  entryComponents: [
    JsonFormsPage
  ],
  imports: [
    IonicPageModule.forChild(JsonFormsPage)
  ]
})
export class JsonFormsPageModule {}
