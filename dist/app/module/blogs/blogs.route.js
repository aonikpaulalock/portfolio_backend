"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsRouter = void 0;
const express_1 = require("express");
const blogs_controller_1 = require("./blogs.controller");
const ValidationRequest_1 = require("../../middleware/ValidationRequest");
const blogs_validation_1 = require("./blogs.validation");
const auth_1 = require("../../middleware/auth");
const router = (0, express_1.Router)();
//! Blog Create
router
    .post("/create-blog", (0, auth_1.auth)("admin"), (0, ValidationRequest_1.ValidationRequestSchema)(blogs_validation_1.BlogsValidations.createBlogsValidation), blogs_controller_1.BlogsControllers.CreateBlogsFromDB)
    //! Get All Blogs
    .get("/", blogs_controller_1.BlogsControllers.getAllBlogsFromDB);
exports.BlogsRouter = router;
