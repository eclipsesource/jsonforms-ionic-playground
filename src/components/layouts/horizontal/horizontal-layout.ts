import {Component} from '@angular/core';
import {RankedTester, rankWith, uiTypeIs} from '@jsonforms/core';
import {JsonFormsIonicLayout} from "../JsonFormsIonicLayout";

@Component({
  selector: 'jsonforms-horizontal-layout',
  templateUrl: 'horizontal-layout.html'
})
export class HorizontalLayoutRenderer extends JsonFormsIonicLayout {

}

export const horizontalLayoutTester: RankedTester = rankWith(1, uiTypeIs('HorizontalLayout'));
