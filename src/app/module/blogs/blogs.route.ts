import { Router } from "express";
import { BlogsControllers } from "./blogs.controller";
import { ValidationRequestSchema } from "../../middleware/ValidationRequest";
import { BlogsValidations } from "./blogs.validation";
import { auth } from "../../middleware/auth";

const router = Router();
//! Blog Create
router
  .post("/create-blog",
    auth("admin"),
    ValidationRequestSchema(
      BlogsValidations.createBlogsValidation
    ),
    BlogsControllers.CreateBlogsFromDB
  )

  //! Get All Blogs
  .get("/", BlogsControllers.getAllBlogsFromDB)

export const BlogsRouter = router;