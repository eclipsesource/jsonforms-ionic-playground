import * as _ from 'lodash';
import {Generate, Resolve} from '@jsonforms/core';
import {ObjectPage} from "./object/object-page";
import {isSchemaArray, isSchemaObject, isSchemaPrimitive, isSchemaRef} from "../../common";
import {ArrayPage} from "./array/array-page";
import {DetailPage} from "../../master-detail/pages/detail/detail";

export const makeLabel = (rootData, rootSchema, path, schema): string => {
  if (isSchemaRef(schema)) {
    return makeLabel(rootData, rootSchema, path, Resolve.schema(rootSchema, schema.$ref));
  } else if (isSchemaObject(schema)) {
    return '[prop] ' + _.last(path.split('.'));
  } else if (isSchemaArray(schema)) {
    return JSON.stringify(_.get(rootData, path));
    // return '[arr item] ' + _.last(path.split('.'));
  } else if (isSchemaPrimitive(schema)) {
    return '[primitive] ' + _.get(rootData, path);
  }

  return '<unknown type>';
};

export const openDetails = (coreState, nav, item) => {
  let schema = item.schema;

  if (isSchemaRef(schema)) {
    schema = Resolve.schema(coreState.schema, schema.$ref)
  }

  if (isSchemaObject(schema)) {
    nav.push(
      ObjectPage,
      {
        // TODO: label?
        showNav: this.showNav,
        path: item.path,
        schema: item.schema,
        uischema: item.uischema
      }
    );
  } else if (isSchemaArray(schema)) {
    nav.push(
      ArrayPage,
      {
        label: _.get(item.d, item.labelRef),
        schema: schema.items,
        path: item.path,
        uischema: item.uischema
      }
    );
  } else {
    nav.push(
      DetailPage,
      {
        item: {
          path: item.path,
          schema: schema,
          uischema: Generate.uiSchema(schema),
        },
      }
    );
  }
};
