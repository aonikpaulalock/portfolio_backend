"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperinceRouter = void 0;
const express_1 = require("express");
const ValidationRequest_1 = require("../../middleware/ValidationRequest");
const auth_1 = require("../../middleware/auth");
const experince_controller_1 = require("./experince.controller");
const experince_validation_1 = require("./experince.validation");
const router = (0, express_1.Router)();
//! Skill Create
router
    .post("/create-experince", (0, auth_1.auth)("admin"), (0, ValidationRequest_1.ValidationRequestSchema)(experince_validation_1.ExperinceValidations.CreateExperinceValidation), experince_controller_1.ExperinceControllers.createExperinceFromDB)
    //! Get All Skills
    .get("/", experince_controller_1.ExperinceControllers.getAllExperinceFromDB);
exports.ExperinceRouter = router;
