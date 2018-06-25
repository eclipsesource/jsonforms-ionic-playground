import {Component} from '@angular/core';
import {RankedTester, rankWith, uiTypeIs} from '@jsonforms/core';
import {JsonFormsIonicLayout} from "../JsonFormsIonicLayout";

@Component({
  selector: 'jsonforms-vertical-layout',
  templateUrl: 'vertical-layout.html'
})
export class VerticalLayoutRenderer extends JsonFormsIonicLayout {

}

export const verticalLayoutTester: RankedTester = rankWith(1, uiTypeIs('VerticalLayout'));
