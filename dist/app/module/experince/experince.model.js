"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experince = exports.ExperinceSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ExperinceSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
}, {
    timestamps: true,
});
exports.Experince = (0, mongoose_1.model)("Experince", exports.ExperinceSchema);
