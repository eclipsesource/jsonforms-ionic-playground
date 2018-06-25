import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObjectPage } from "./object-page";


@NgModule({
  declarations: [
    ObjectPage
  ],
  imports: [
    IonicPageModule.forChild(ObjectPage),
  ],
  exports: [
    ObjectPage
  ]
})
export class ObjectPageModule { }
