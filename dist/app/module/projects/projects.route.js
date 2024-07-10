"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsRouter = void 0;
const express_1 = require("express");
const ValidationRequest_1 = require("../../middleware/ValidationRequest");
const projects_validation_1 = require("./projects.validation");
const projects_controller_1 = require("./projects.controller");
const auth_1 = require("../../middleware/auth");
const router = (0, express_1.Router)();
//! Blog Create
router
    .post("/create-project", (0, auth_1.auth)("admin"), (0, ValidationRequest_1.ValidationRequestSchema)(projects_validation_1.ProjectsValidations.CreateProjectValidation), projects_controller_1.ProjectsControllers.createProjectFromDB)
    //! Get All Blogs
    .get("/", projects_controller_1.ProjectsControllers.getAllProjectsFromDB);
exports.ProjectsRouter = router;
