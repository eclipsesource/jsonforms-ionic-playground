import {Component, Input} from '@angular/core';
import {NavParams} from "ionic-angular";

/**
 * Generated class for the CategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'category',
  templateUrl: 'category.html'
})
export class CategoryRenderer {

  label: string;
  elements: any[];

  constructor(private navParams: NavParams) {
    const category = navParams.get('category');
    this.label = category.label;
    this.elements = category.elements;
  }

}
