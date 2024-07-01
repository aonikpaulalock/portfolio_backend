import { Router } from "express";
import { ValidationRequestSchema } from "../../middleware/ValidationRequest";
import { UserControllers } from "./user.controller";
import { UserValidations } from "./user.validation";
import { auth } from "../../middleware/auth";

const router = Router();
router
  //! User Register
  .post("/register",
    ValidationRequestSchema(
      UserValidations.createUserValidation
    ),
    UserControllers.createUser
  )

  //! User Login
  .post("/login",
    ValidationRequestSchema(
      UserValidations.loginUserValidation
    ),
    UserControllers.loginUser
  )

  //! Change passoword Login
  .post("/change-password",
    auth("user", "admin"),
    ValidationRequestSchema(
      UserValidations.changePasswordValidation
    ),
    UserControllers.changePassword
  )

  //! Get All User
  .get("/", auth("admin"), UserControllers.getAllUser)

export const UserRouter = router;