"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsValidations = void 0;
const zod_1 = require("zod");
const createBlogsValidation = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
exports.BlogsValidations = {
    createBlogsValidation
};
