import { Schema, model } from "mongoose";

export const ProjectSchema = new Schema({
  title: { type: String, required: true },
  client: { type: String, required: true },
  server: { type: String, required: true },
  preview: { type: String, required: true },
  projectImage: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

export const Project = model("Project", ProjectSchema)