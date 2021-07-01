"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformOneOf = void 0;
function transformOneOf(fieldSchema, prop, generator) {
    const key = prop.key ? prop.key : fieldSchema.key;
    if (!key) {
        throw new Error(`Invalid state needs key ${JSON.stringify(prop)}`);
    }
    let typeToParse = prop.oneOf.filter((item) => item.type !== null && item.type !== "null");
    if (typeToParse.length >= 1) {
        typeToParse = typeToParse.filter((item) => item.type !== "string" || item.format);
    }
    if (typeToParse.length === 0) {
        return null;
    }
    return generator.getFieldSchema(typeToParse.pop(), fieldSchema.key || "unknown");
}
exports.transformOneOf = transformOneOf;
//# sourceMappingURL=transformOneOf.js.map