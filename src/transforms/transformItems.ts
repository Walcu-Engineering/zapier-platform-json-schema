import { FieldSchema } from "../types/FieldSchema";
import ZapierSchemaGenerator from "../ZapierSchemaGenerator";

export function transformItems(
  fieldSchema: Partial<FieldSchema>,
  prop: any,
  generator: ZapierSchemaGenerator
): Partial<FieldSchema> | null {
  const itemsType = prop.items;
  if (!fieldSchema.key) {
    throw new Error(`Key must be set! ${JSON.stringify(fieldSchema)}`);
  }
  const is_nested = ['anyOf', 'allOf'].some(k => k in itemsType) || itemsType.type === 'object';
  const listType = generator.getFieldSchema(itemsType, is_nested ? fieldSchema.key + '.0' : fieldSchema.key) ;

  if (listType) {
    return { ...listType, list: true };
  }
  return null;
}
