import { Router } from "express";
import { UserRouter } from "../module/Auth/user.route";
import { BlogsRouter } from "../module/blogs/blogs.route";
import { ProjectsRouter } from "../module/projects/projects.route";
import { SkillsRouter } from "../module/skills/skills.route";

export const router = Router();
const ProjectRoutes = [
  {
    path: "/auth",
    routes: UserRouter
  },
  {
    path: "/blogs",
    routes: BlogsRouter
  },
  {
    path: "/projects",
    routes: ProjectsRouter
  },
  {
    path: "/skills",
    routes: SkillsRouter
  },
]

ProjectRoutes.forEach((route) => router.use(route.path, route.routes))

export const GlobalRoutes = router
