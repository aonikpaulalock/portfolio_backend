"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsRouter = void 0;
const express_1 = require("express");
const ValidationRequest_1 = require("../../middleware/ValidationRequest");
const skills_controller_1 = require("./skills.controller");
const skills_validation_1 = require("./skills.validation");
const auth_1 = require("../../middleware/auth");
const router = (0, express_1.Router)();
//! Skill Create
router
    .post("/create-skill", (0, auth_1.auth)("admin"), (0, ValidationRequest_1.ValidationRequestSchema)(skills_validation_1.SkillsValidations.CreateSkillValidation), skills_controller_1.SkillsControllers.createSkillFromDB)
    //! Get All Skills
    .get("/", skills_controller_1.SkillsControllers.getAllSkillsFromDB);
exports.SkillsRouter = router;
