import { Router } from "express";
import { ValidationRequestSchema } from "../../middleware/ValidationRequest";
import { auth } from "../../middleware/auth";
import { ExperinceControllers } from "./experince.controller";
import { ExperinceValidations } from "./experince.validation";

const router = Router();
//! Skill Create
router
  .post("/create-experince",
    auth("admin"),
    ValidationRequestSchema(
      ExperinceValidations.CreateExperinceValidation
    ),
    ExperinceControllers.createExperinceFromDB
  )

  //! Get All Skills
  .get("/", ExperinceControllers.getAllExperinceFromDB)

export const ExperinceRouter = router;