import {
  ControlProps,
  mapStateToControlProps,
  mapDispatchToControlProps,
  mapStateToLayoutProps
} from '@jsonforms/core';

export const connectLayoutToJsonForms = function (store, ownProps) {
  return store.select().map(function (state) {
    return mapStateToLayoutProps(state, ownProps);
  });
};

export const connectControlToJsonForms = (store, ownProps: any) =>
    store.select().map(state => {
      const props = mapStateToControlProps(state, ownProps);
      const dispatch = mapDispatchToControlProps(store.dispatch);
      return {...props, ...dispatch};
    });
