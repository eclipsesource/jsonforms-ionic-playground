import * as _ from 'lodash';
import {
  Category,
  Categorization,
  JsonFormsState,
  and,
  rankWith,
  RankedTester,
  StatePropsOfLayout,
  uiTypeIs
} from '@jsonforms/core';
import { JsonFormsBaseRenderer }  from '@jsonforms/angular';
import { Component, ViewChild} from '@angular/core';
import {NavController} from "ionic-angular";
import {CategoryRenderer} from "../category/category";
import {NgRedux} from "@angular-redux/store";
import {Subscription} from "rxjs/Subscription";
import {connectLayoutToJsonForms} from "../common";

/**
 * Top-level categorization renderer.
 */
@Component({
  selector: 'categorization',
  templateUrl: 'categorization.html'
})
export class CategorizationRenderer extends JsonFormsBaseRenderer {

  @ViewChild('categoryContent') nav: NavController;
  categories: any[];
  label: string;
  stateProps: StatePropsOfLayout;
  private subscription: Subscription;

  constructor(private ngRedux: NgRedux<JsonFormsState>) {
    super();
  }

  ngOnInit() {
    this.categories = (this.getOwnProps().uischema as Categorization).elements;
    const firstCategory = (this.getOwnProps().uischema as Categorization).elements[0];
    this.label = firstCategory.label;
    const state$ = connectLayoutToJsonForms(this.ngRedux, this.getOwnProps());
    this.subscription = state$.subscribe(state => {
      this.stateProps = state
    });
    this.renderCategory(firstCategory);
  }

  renderCategory(category) {
    this.nav.push(CategoryRenderer, { category: category });
    this.label = category.label;
  }
}

export const isCategorization = (category: Category | Categorization): category is Categorization =>
  category.type === 'Categorization';

export const categorizationTester: RankedTester = rankWith(
  1,
  and(
    uiTypeIs('Categorization'),
    uischema => {
      const hasCategory = (categorization: Categorization): boolean => {
        if (_.isEmpty(categorization.elements)) {
          return false;
        }
        // TODO: restriction is quite strict, since _all_ children of the categorization have to be categories
        return categorization.elements
          .map(elem => isCategorization(elem) ? hasCategory(elem) : elem.type === 'Category')
          .reduce((prev, curr) => prev && curr, true);
      };

      return hasCategory(uischema as Categorization);
    }
  ));
