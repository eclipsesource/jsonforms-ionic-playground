import {NgRedux} from "@angular-redux/store";
import {Component} from "@angular/core";
import {JsonFormsControl} from "@jsonforms/angular";
import {ControlProps, getLocale, JsonFormsState, setLocale, setSchema, setUISchema} from "@jsonforms/core";
import {LangService} from "./lang.service";

@Component({
  selector: "lang-page",
  template:  `
    <p>Click button to set locale</p>
    <p>Current locale: {{currentLocale}}</p>
    <button ion-button (click)="changeLocale('de-DE')">de-DE</button>
    <button ion-button (click)="changeLocale('en-US')">en-US</button>
  `
})
export class LangPage extends JsonFormsControl {

  private currentLocale: string;

  constructor(protected ngRedux: NgRedux<JsonFormsState>, private langService: LangService) {
    super(ngRedux);
  }

  public mapAdditionalProps(props: ControlProps) {
    this.currentLocale = getLocale(this.ngRedux.getState());
  }

  private changeLocale(localeString: string) {
    this.ngRedux.dispatch(setLocale(localeString));
    this.ngRedux.dispatch(setSchema(this.langService.getSchema(localeString)));
    this.ngRedux.dispatch(setUISchema(this.langService.getUISchema(localeString)));
  }
}
