import { Connect, Query } from "../configs/mysql";
import { BlogModel } from "../models/blogModel";

const blogService = {
  create: (blog: BlogModel) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO blog (blog_title, blog_content, blog_date, blog_image, user_id, blog_like_count, blog_comment_count) VALUES ("${blog.blog_title}", "${blog.blog_content}", "${blog.blog_date}", "${blog.blog_image}", ${blog.user_id}, 0, 0)`;
      console.log(query);
      Connect().then((connection) => {
        Query(connection, query)
          .then((result) => {
            resolve(result);
          })
          .catch((error) => {
            reject(error);
          })
          .finally(() => {
            connection.end();
          });
      });
    });
  },
  getAll: () => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM blog";
      Connect().then((connection) => {
        Query(connection, query)
          .then((result) => {
            resolve(result);
          })
          .catch((error) => {
            reject(error);
          })
          .finally(() => {
            connection.end();
          });
      });
    });
  },
};

export default blogService;
