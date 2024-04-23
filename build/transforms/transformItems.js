"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformItems = void 0;
function transformItems(fieldSchema, prop, generator) {
    const itemsType = prop.items;
    if (!fieldSchema.key) {
        throw new Error(`Key must be set! ${JSON.stringify(fieldSchema)}`);
    }
    const is_nested = ['anyOf', 'allOf'].some(k => k in itemsType) || itemsType.type === 'object';
    const listType = generator.getFieldSchema(itemsType, is_nested ? fieldSchema.key + '.0' : fieldSchema.key);
    if (listType) {
        return Object.assign(Object.assign({}, listType), { list: true });
    }
    return null;
}
exports.transformItems = transformItems;
//# sourceMappingURL=transformItems.js.map