"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = exports.ProjectSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProjectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    client: { type: String, required: true },
    server: { type: String, required: true },
    preview: { type: String, required: true },
    projectImage: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});
exports.Project = (0, mongoose_1.model)("Project", exports.ProjectSchema);
