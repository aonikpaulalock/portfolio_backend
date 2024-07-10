"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsValidations = void 0;
const zod_1 = require("zod");
const CreateSkillValidation = zod_1.z.object({
    name: zod_1.z.string().min(1).max(255),
    skillsImage: zod_1.z.string(),
});
exports.SkillsValidations = {
    CreateSkillValidation
};
