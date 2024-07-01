import { Router } from "express";
import { UserRouter } from "../module/Auth/user.route";

export const router = Router();
const ProjectRoutes = [
  {
    path: "/auth",
    routes: UserRouter
  }
]

ProjectRoutes.forEach((route) => router.use(route.path, route.routes))

export const GlobalRoutes = router
