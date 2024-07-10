"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const ValidationRequest_1 = require("../../middleware/ValidationRequest");
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const auth_1 = require("../../middleware/auth");
const router = (0, express_1.Router)();
router
    //! User Register
    .post("/register", (0, ValidationRequest_1.ValidationRequestSchema)(user_validation_1.UserValidations.createUserValidation), user_controller_1.UserControllers.createUser)
    //! User Login
    .post("/login", (0, ValidationRequest_1.ValidationRequestSchema)(user_validation_1.UserValidations.loginUserValidation), user_controller_1.UserControllers.loginUser)
    //! Change passoword Login
    // .post("/change-password",
    //   auth("user", "admin"),
    //   ValidationRequestSchema(
    //     UserValidations.changePasswordValidation
    //   ),
    //   UserControllers.changePassword
    // )
    //! Get All User
    .get("/", (0, auth_1.auth)("admin"), user_controller_1.UserControllers.getAllUser);
exports.UserRouter = router;
