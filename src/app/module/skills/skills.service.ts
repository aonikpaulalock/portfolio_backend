import { TSkill } from "./skills.interface";
import { Skills } from "./skills.model";



const createSkillIntoDB = async (payload: TSkill) => {
  const result = await Skills.create(payload);
  return result
}

const getAllSkillsIntoDB = async () => {
  const result = await Skills.find();
  return result
}

export const SkillsServices = {
  createSkillIntoDB,
  getAllSkillsIntoDB
}