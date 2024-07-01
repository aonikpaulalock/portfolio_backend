import { TBlogs } from "./blogs.interface";
import { Blogs } from "./blogs.model";

const createBlogsIntoDB = async (payload: TBlogs) => {
  const result = await Blogs.create(payload);
  return result
}

const getAllBlogsIntoDB = async () => {
  const result = await Blogs.find();
  return result
}

export const BlogsServices = {
  createBlogsIntoDB,
  getAllBlogsIntoDB
}