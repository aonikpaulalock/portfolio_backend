import { z } from "zod"

const createBlogsValidation = z.object({
  title: z.string(),
  content: z.string(),
})

export const BlogsValidations = {
  createBlogsValidation
}