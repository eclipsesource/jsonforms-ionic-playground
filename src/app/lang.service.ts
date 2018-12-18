import { Injectable } from "@angular/core";
import {JsonSchema, UISchemaElement} from "@jsonforms/core";

@Injectable()
export class LangService {

  private localizedSchemas = new Map<string, JsonSchema>();
  private localizedUISchemas = new Map<string, UISchemaElement>();

  public setSchema(locale: string, schema: JsonSchema) {
    this.localizedSchemas.set(locale, schema);
  }

  public setUISchema(locale: string, schema: UISchemaElement) {
    this.localizedUISchemas.set(locale, schema);
  }

  public getSchema(locale: string) {
    return this.localizedSchemas.get(locale);
  }

  public getUISchema(locale: string) {
    return this.localizedUISchemas.get(locale);
  }
}
