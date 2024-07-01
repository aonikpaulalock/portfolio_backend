import { Schema, model } from "mongoose";

export const BlogsSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
}, {
  timestamps: true,
});

export const Blogs = model("Blogs", BlogsSchema)