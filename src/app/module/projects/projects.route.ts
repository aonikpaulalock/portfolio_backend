import { Router } from "express";
import { ValidationRequestSchema } from "../../middleware/ValidationRequest";
import { ProjectsValidations } from "./projects.validation";
import { ProjectsControllers } from "./projects.controller";

const router = Router();
//! Blog Create
router
  .post("/create-project",
    ValidationRequestSchema(
      ProjectsValidations.CreateProjectValidation
    ),
    ProjectsControllers.createProjectFromDB
  )

  //! Get All Blogs
  .get("/", ProjectsControllers.getAllProjectsFromDB)

export const ProjectsRouter = router;