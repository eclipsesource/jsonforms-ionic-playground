import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasterPage } from './master';

@NgModule({
  declarations: [
    MasterPage
  ],
  imports: [
    IonicPageModule.forChild(MasterPage),
  ],
  exports: [
    MasterPage
  ]
})
export class ItemsPageModule { }
