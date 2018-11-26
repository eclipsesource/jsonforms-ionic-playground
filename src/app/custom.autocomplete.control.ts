import { Component, ViewChild } from '@angular/core';
import {AutoCompleteControlRenderer} from "@jsonforms/ionic-renderers";

import {of} from 'rxjs/observable/of';
import {delay} from 'rxjs/operators/delay';
import * as randomWords from 'random-words';
import {IonicSelectableComponent, IonicSelectableModule} from "ionic-selectable";

const words: string[] = randomWords(1000);

const fetchSuggestions = (input: string): Promise<string[]> => {
  const filtered: string[] = words.filter(word => word.startsWith(input));
  return of(filtered).pipe(delay(1000)).toPromise();
};

@Component({
  selector: 'jsonforms-custom-autocomplete-control',
  template: `<ion-item>
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

  @ViewChild('selectable') selectable: IonicSelectableComponent;

  onSearch(ev: {
    component: IonicSelectableModule,
    text: any
  }) {
    super.onChange(ev);
    this.selectable.showLoading();
    fetchSuggestions(ev.text)
      .then((options: string[]) => {
        this.options = options;
        this.selectable.hideLoading();
      })
  }
}
