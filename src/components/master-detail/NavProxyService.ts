import { Injectable } from '@angular/core';
import { Nav } from 'ionic-angular';
import { DetailPage } from "./pages/DetailPage";
import { PlaceholderPage } from "./pages/placeholder/placeholder";

@Injectable()
export class NavProxyService {

  _masterNav: Nav;
  _detailNav: Nav = null;
  _isPaneSplitted: boolean = false;

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
      this.isPaneSplitted ? this.activateSplitView() : this.deactivateSplitView();
    }
  }

  activateSplitView() {
    const currentView = this.masterNav.getActive();
    if (currentView !== undefined && currentView.component.prototype instanceof DetailPage) {
      // if the current view is a 'Detail' page, remove it from the 'master' nav stack
      // and add it to the 'detail' nav stack...
      this.masterNav.pop();
      this.detailNav.setRoot(currentView.component, currentView.data);
    }
  }

  deactivateSplitView() {
    const detailView = this.detailNav.getActive();
    this.detailNav.setRoot(PlaceholderPage);
    if (detailView.component.prototype instanceof DetailPage) {
      const index = this.masterNav.getViews().length;
      this.masterNav.insert(index, detailView.component, detailView.data);
    }
  }
}
