import { Injectable } from '@angular/core';
import { Nav } from 'ionic-angular';
import { AbstractDetailPage } from "./pages/AbstractDetailPage";
import { PlaceholderPage } from "./pages/placeholder/placeholder";

@Injectable()
export class NavProxyService {

  _masterNav: Nav;
  _detailNav: Nav = null;
  _isPaneSplitted: boolean;
  _isSplitting = false;

  get masterNav(): Nav {
    return this._masterNav;
  }

  set masterNav(value: Nav) {
    this._masterNav = value;
  }

  get detailNav(): Nav {
    return this._detailNav;
  }

  set detailNav(value: Nav) {
    this._detailNav = value;
  }

  get isPaneSplitted(): boolean {
    return this._isPaneSplitted;
  }

  set isPaneSplitted(value: boolean) {
    this._isPaneSplitted = value;
  }

  pushDetail(page: any, params: any) {
    if (this.isPaneSplitted) {
      this.detailNav.setRoot(page, params);
    } else {
      this.masterNav.push(page, params);
    }
  }

  pushMaster(page: any, params: any) {
    this.masterNav.push(page, params);
  }

  onSplitPaneChanged(isOn) {
    this.isPaneSplitted = isOn;
    if (this.masterNav && this.detailNav) {
      this.isPaneSplitted ? this.splitView() : this.mergeView();
    }
  }

  splitView() {
    if (this._isSplitting) {
      return;
    }

    this._isSplitting = true;
    const currentView = this.masterNav.getActive();
    if (currentView !== undefined && currentView.component.prototype instanceof AbstractDetailPage) {
      // if the current view is a 'Detail' page, remove it from the 'master' nav stack
      // and add it to the 'detail' nav stack...
      return this.masterNav.pop()
        .then(() => this.detailNav.setRoot(currentView.component, currentView.data))
        .then(() => this._isSplitting = false);
    }
    this._isSplitting = false;
  }

  mergeView() {

    if (this._isSplitting) {
      return;
    }

    this._isSplitting = true;
    const detailView = this.detailNav.getActive();
    this.detailNav.setRoot(PlaceholderPage)
      .then(
        () => {
          if (detailView.component.prototype instanceof AbstractDetailPage) {
            const index = this.masterNav.getViews().length;
            this.masterNav.insert(index, detailView.component, detailView.data);
          }
        }
      )
      .then(() => this._isSplitting = false);
  }
}
