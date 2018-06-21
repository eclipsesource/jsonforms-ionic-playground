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
import { ItemsPage } from "./master-detail/pages/items/items";
import { ItemPage } from "./master-detail/pages/item/item";
import { JsonFormsDispatch } from "./jsonforms-dispatch/jsonforms-dispatch";
import { UnknownRenderer } from "./unknown/unknown";
import {GroupComponent} from "./group/group";
import {ArrayPage} from "./array-control/array-page.component";
import {LabelRenderer} from "./label/label";
import {DateComponent} from "./date/date";
import {BooleanComponent} from "./boolean/boolean";
import {EnumComponent} from "./enum/enum";

@NgModule({
	declarations: [
	  ArrayControlRenderer,
    BooleanComponent,
	  CategorizationRenderer,
    CategoryRenderer,
    CategorizationRenderer,
    DateComponent,
    EnumComponent,
    StringControlRenderer,
    LabelRenderer,

    GroupComponent,
    IonicVerticalLayoutRenderer,
    IonicHorizontalLayoutRenderer,

    // Master Detail components
    MasterDetailComponent,
    PlaceholderPage,
    ItemsPage,
    ItemPage,

    // array
    ArrayPage,

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

    // Master Detail components
    MasterDetailComponent,
    PlaceholderPage,
    ItemsPage,
    ItemPage,

    ArrayPage,

    // JsonFormsDispatch,
    UnknownRenderer
  ],
  providers: [
    NavProxyService
  ]
})
export class JsonFormsIonicModule {}
