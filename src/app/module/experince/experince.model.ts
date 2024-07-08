import { Schema, model } from "mongoose";

export const ExperinceSchema = new Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
}, {
  timestamps: true,
});

export const Experince = model("Experince", ExperinceSchema)