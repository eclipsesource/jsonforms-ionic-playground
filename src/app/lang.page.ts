import {NgRedux} from "@angular-redux/store";
import {Component} from "@angular/core";
import {JsonFormsControl} from "@jsonforms/angular";
import {getLocale, JsonFormsState, setLocale} from "@jsonforms/core";

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

  constructor(protected ngRedux: NgRedux<JsonFormsState>) {
    super(ngRedux);
  }

  public mapAdditionalProps() {
    this.currentLocale = getLocale(this.ngRedux.getState());
  }

  private changeLocale(localeString: string) {
    this.ngRedux.dispatch(setLocale(localeString));
  }
}
