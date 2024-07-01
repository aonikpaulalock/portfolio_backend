import { TProject } from "./projects.interface";
import { Project } from "./projects.model";


const createProjectIntoDB = async (payload:TProject ) => {
  const result = await Project.create(payload);
  return result
}

const getAllProjectsIntoDB = async () => {
  const result = await Project.find();
  return result
}

export const ProjectsServices = {
  createProjectIntoDB,
  getAllProjectsIntoDB
}