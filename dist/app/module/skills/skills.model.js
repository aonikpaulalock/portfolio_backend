"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skills = exports.SkillsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.SkillsSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    skillsImage: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});
exports.Skills = (0, mongoose_1.model)("Skill", exports.SkillsSchema);
