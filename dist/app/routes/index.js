"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalRoutes = exports.router = void 0;
const express_1 = require("express");
const user_route_1 = require("../module/Auth/user.route");
const blogs_route_1 = require("../module/blogs/blogs.route");
const projects_route_1 = require("../module/projects/projects.route");
const skills_route_1 = require("../module/skills/skills.route");
const expeerince_route_1 = require("../module/experince/expeerince.route");
exports.router = (0, express_1.Router)();
const ProjectRoutes = [
    {
        path: "/auth",
        routes: user_route_1.UserRouter
    },
    {
        path: "/blogs",
        routes: blogs_route_1.BlogsRouter
    },
    {
        path: "/projects",
        routes: projects_route_1.ProjectsRouter
    },
    {
        path: "/skills",
        routes: skills_route_1.SkillsRouter
    },
    {
        path: "/experince",
        routes: expeerince_route_1.ExperinceRouter
    },
];
ProjectRoutes.forEach((route) => exports.router.use(route.path, route.routes));
exports.GlobalRoutes = exports.router;
