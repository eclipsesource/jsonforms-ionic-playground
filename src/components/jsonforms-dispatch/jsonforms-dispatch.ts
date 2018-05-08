import * as _ from 'lodash';
import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  Type,
  ViewContainerRef
} from '@angular/core';
import {
  JsonFormsProps,
  mapStateToDispatchRendererProps,
  UISchemaElement
} from '@jsonforms/core';
import { NgRedux } from '@angular-redux/store';
import 'rxjs/add/operator/map';
import { JsonFormsBaseRenderer } from '@jsonforms/angular';
import { UnknownRenderer } from "../unknown/unknown";

@Directive({
  selector: 'jsonforms-dispatch',
})
export class JsonFormsDispatch implements OnInit {

  @Input() path: string;
  @Input() uischema: UISchemaElement;
  @Input() schema: UISchemaElement;

  private subscription;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private ngRedux: NgRedux<any> ) {
  }

  ngOnInit(): void {
    const state$ = this.ngRedux.select(state =>
        mapStateToDispatchRendererProps(state, {uischema: this.uischema}),
      (x, y) => _.isEqual(x, y)
    );
    this.subscription = state$.subscribe(props => {
      const {renderers, schema, uischema} = props as JsonFormsProps;
      const s = this.schema || schema;
      const u = this.uischema || uischema;

      const renderer = _.maxBy(renderers, r => r.tester(u, s));
      let bestComponent: Type<any> = UnknownRenderer;
      if (renderer !== undefined && renderer.tester(u, s) !== -1) {
        bestComponent = renderer.renderer;
      }
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(bestComponent);
      this.viewContainerRef.clear();

      const componentRef = this.viewContainerRef.createComponent(componentFactory);
      if (componentRef.instance instanceof JsonFormsBaseRenderer) {
        const instance = (componentRef.instance as JsonFormsBaseRenderer);
        instance.uischema = u;
        instance.schema = s;
        instance['path'] = this.path;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
