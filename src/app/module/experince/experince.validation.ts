import { z } from 'zod';

const CreateExperinceValidation = z.object({
  title: z.string(),
  company: z.string(),
  description: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});

export const ExperinceValidations = {
  CreateExperinceValidation
}