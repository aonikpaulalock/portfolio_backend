"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperinceValidations = void 0;
const zod_1 = require("zod");
const CreateExperinceValidation = zod_1.z.object({
    title: zod_1.z.string(),
    company: zod_1.z.string(),
    description: zod_1.z.string(),
    startDate: zod_1.z.string(),
    endDate: zod_1.z.string(),
});
exports.ExperinceValidations = {
    CreateExperinceValidation
};
