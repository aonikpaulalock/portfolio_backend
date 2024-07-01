import { z } from 'zod';

const CreateSkillValidation = z.object({
  name: z.string().min(1).max(255),
  skillsImage: z.string(),
});

export const SkillsValidations = {
  CreateSkillValidation
}