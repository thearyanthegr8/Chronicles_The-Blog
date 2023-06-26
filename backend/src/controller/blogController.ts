import { Request, Response, NextFunction } from "express";
import blogService from "../services/blogService";

const createBlog = async (req: Request, res: Response, next: NextFunction) => {
  console.log("Create blog");
  const { blog_title, blog_content, blog_date, blog_image } = req.body;

  if (req.session?.authenticated === true && req.session.user !== undefined) {
    try {
      const result = await blogService.create({
        blog_title,
        blog_content,
        user_id: req.session.user.id,
        blog_date,
        blog_image,
      });

      return res.status(200).json({ message: "Blog created" });
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const getAllBlogs = async (req: Request, res: Response, next: NextFunction) => {
  console.log("Get all blogs");

  try {
    const result = await blogService.getAll();

    return res.status(200).json(result);
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export default { createBlog, getAllBlogs };
