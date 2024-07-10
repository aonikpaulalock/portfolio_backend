import { Schema, model } from "mongoose";

export const SkillsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  skillsImage: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

export const Skills = model("Skill", SkillsSchema)