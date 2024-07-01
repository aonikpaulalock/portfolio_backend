import { Router } from "express";
import { ValidationRequestSchema } from "../../middleware/ValidationRequest";
import { SkillsControllers } from "./skills.controller";
import { SkillsValidations } from "./skills.validation";
import { auth } from "../../middleware/auth";

const router = Router();
//! Skill Create
router
  .post("/create-skill",
    auth("admin"),
    ValidationRequestSchema(
      SkillsValidations.CreateSkillValidation
    ),
    SkillsControllers.createSkillFromDB
  )

  //! Get All Skills
  .get("/", SkillsControllers.getAllSkillsFromDB)

export const SkillsRouter = router;