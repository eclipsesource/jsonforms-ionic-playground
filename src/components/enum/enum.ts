import { Component } from '@angular/core';
import { isEnumControl, JsonFormsState, rankWith } from '@jsonforms/core';
import {JsonFormsIonicControl} from "../JsonFormsIonicControl";
import {NgRedux} from "@angular-redux/store";

/**
 * Generated class for the EnumComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'enum',
  templateUrl: 'enum.html'
})
export class EnumComponent extends JsonFormsIonicControl {

  private options

  constructor(ngRedux: NgRedux<JsonFormsState>) {
    super(ngRedux);
  }

  ngOnInit() {
    super.ngOnInit();
    this.options = this.resolvedSchema.enum;
  }
}

export const ionicEnumControlTester = rankWith(
  2,
  isEnumControl
);
