import { Component, ViewChild } from "@angular/core";
import {AutoCompleteControlRenderer} from "@jsonforms/ionic-renderers";

import {IonicSelectableComponent, IonicSelectableModule} from "ionic-selectable";
import * as randomWords from "random-words";
import {of} from "rxjs/observable/of";
import {delay} from "rxjs/operators/delay";

const words: string[] = randomWords(1000);

const fetchSuggestions = (input: string): Promise<string[]> => {
  const filtered: string[] = words.filter((word: string) => word.startsWith(input));
  return of(filtered).pipe(delay(1000)).toPromise();
};

@Component({
  selector: "jsonforms-custom-autocomplete-control",
  template: `
    <ion-item no-lines no-padding>
      <ion-label floating>{{label}}</ion-label>
      <ion-label stacked *ngIf="error" color="error">{{error}}</ion-label>
      <ionic-selectable
        #selectable
        item-content
        [ngModel]="data"
        [items]="options"
        [canSearch]="true"
        (onSearch)="onSearch($event)"
        (onChange)="onChange($event)"
      ></ionic-selectable>
    </ion-item>`
})
export class CustomAutocompleteControl extends AutoCompleteControlRenderer {

  @ViewChild("selectable") private selectable: IonicSelectableComponent;

  private onSearch(ev: {
    component: IonicSelectableModule,
    text: any
  }) {
    super.onChange(ev);
    this.selectable.showLoading();
    fetchSuggestions(ev.text)
      .then(
        (options: string[]) => {
          this.options = options;
          this.selectable.hideLoading();
        }
      );
  }
}
