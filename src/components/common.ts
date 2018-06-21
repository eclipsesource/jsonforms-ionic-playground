import {
  mapStateToControlProps,
  mapDispatchToControlProps,
  mapStateToLayoutProps
} from '@jsonforms/core';
import * as _ from 'lodash';

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


const keywords = ["#", "properties", "items"]

export const removeSchemaKeywords = (path: string) => {
  return path.split('/').filter(s => !_.some(keywords, key => key === s)).join(".");
};


export const isSchemaRef =  schema => _.has(schema, '$ref');

export const isSchemaObject = schema => schema.type === 'object';

export const isSchemaArray = schema => schema.type === 'array';

export const isSchemaPrimitive = schema => !isSchemaArray(schema) && !isSchemaObject(schema);
