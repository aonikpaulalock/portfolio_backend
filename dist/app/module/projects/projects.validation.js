"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsValidations = void 0;
const zod_1 = require("zod");
const CreateProjectValidation = zod_1.z.object({
    title: zod_1.z.string().min(1).max(255),
    client: zod_1.z.string().url({ message: 'Invalid client URL' }),
    server: zod_1.z.string().url({ message: 'Invalid server URL' }),
    preview: zod_1.z.string().url(),
    projectImage: zod_1.z.string(),
});
exports.ProjectsValidations = {
    CreateProjectValidation
};
