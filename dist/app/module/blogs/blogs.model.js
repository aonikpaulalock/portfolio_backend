"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blogs = exports.BlogsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.BlogsSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
}, {
    timestamps: true,
});
exports.Blogs = (0, mongoose_1.model)("Blogs", exports.BlogsSchema);
