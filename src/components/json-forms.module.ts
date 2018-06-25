import { NgModule } from '@angular/core';
import { CategorizationRenderer } from './categorization/categorization';
import { CategoryRenderer } from './category/category';
import IonicVerticalLayoutRenderer from "./vertical-layout/vertical-layout";
import { StringControlRenderer } from './string-control/string-control';
import { IonicModule} from "ionic-angular";
import { JsonFormsModule } from '@jsonforms/angular';
import { IonicHorizontalLayoutRenderer } from './horizontal-layout/horizontal-layout';
import { ArrayControlRenderer } from "./array-control/array-control";
import { NavProxyService } from "./master-detail/NavProxyService";
import { MasterDetailComponent } from "./master-detail/master-detail";
import { PlaceholderPage } from "./master-detail/pages/placeholder/placeholder";
import { MasterPage} from "./master-detail/pages/master/master";
import { DetailPage } from "./master-detail/pages/detail/detail";
import { JsonFormsDispatch } from "./jsonforms-dispatch/jsonforms-dispatch";
import { UnknownRenderer } from "./unknown/unknown";
import {GroupComponent} from "./group/group";
import {LabelRenderer} from "./label/label";
import {DateComponent} from "./date/date";
import {BooleanComponent} from "./boolean/boolean";
import {EnumComponent} from "./enum/enum";
import {ArrayPage} from "./array-control/pages/array/array-page";
import {ObjectPage} from "./array-control/pages/object/object-page";
import {NumberControlRenderer} from "./number/number";

@NgModule({
	declarations: [
    BooleanComponent,
	  CategorizationRenderer,
    CategoryRenderer,
    CategorizationRenderer,
    DateComponent,
    EnumComponent,
    StringControlRenderer,
    LabelRenderer,
    NumberControlRenderer,

    GroupComponent,
    IonicVerticalLayoutRenderer,
    IonicHorizontalLayoutRenderer,

    // Master Detail components
    MasterDetailComponent,
    PlaceholderPage,
    MasterPage,
    DetailPage,

    // array
    ArrayControlRenderer,
    ArrayPage,
    ObjectPage,

    JsonFormsDispatch,
    UnknownRenderer
  ],
	imports: [
    IonicModule,
    JsonFormsModule
  ],
	exports: [
	  ArrayControlRenderer,
    CategoryRenderer,
    CategorizationRenderer,
    StringControlRenderer,
    IonicVerticalLayoutRenderer,
    IonicHorizontalLayoutRenderer
  ],
  entryComponents: [
    ArrayControlRenderer,
    BooleanComponent,
    CategoryRenderer,
    CategorizationRenderer,
    DateComponent,
    EnumComponent,
    StringControlRenderer,
    IonicVerticalLayoutRenderer,
    IonicHorizontalLayoutRenderer,
    GroupComponent,
    LabelRenderer,
    NumberControlRenderer,

    // Master Detail components
    MasterDetailComponent,
    PlaceholderPage,
    MasterPage,
    DetailPage,

    ArrayPage,
    ObjectPage,

    // JsonFormsDispatch,
    UnknownRenderer
  ],
  providers: [
    NavProxyService
  ]
})
export class JsonFormsIonicModule {}
