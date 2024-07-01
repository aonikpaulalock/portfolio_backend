import { z } from 'zod';

const CreateProjectValidation = z.object({
  title: z.string().min(1).max(255),
  client: z.string().url({ message: 'Invalid client URL' }),
  server: z.string().url({ message: 'Invalid server URL' }),
  preview: z.string().url(),
  projectImage: z.string(),
});

export const ProjectsValidations = {
  CreateProjectValidation
}