"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DbObjectId_1 = require("./DbObjectId");
exports.DbObjectId = DbObjectId_1.DbObjectId;
let factory;
exports.use = (factoryImpl) => {
    factory = factoryImpl;
};
exports.repo = (opts) => {
    if (!factory) {
        throw new Error("no implementation found");
    }
    return factory.createRepository(opts);
};
exports.query = (opts) => {
    if (!factory) {
        throw new Error("no implementation found");
    }
    return factory.createQueryBuilder(opts);
};
//# sourceMappingURL=index.js.map
