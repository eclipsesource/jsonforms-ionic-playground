import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ArrayPage} from "./array-page";


@NgModule({
  declarations: [
    ArrayPage
  ],
  imports: [
    IonicPageModule.forChild(ArrayPage),
  ],
  exports: [
    ArrayPage
  ]
})
export class ArrayPageModule { }
