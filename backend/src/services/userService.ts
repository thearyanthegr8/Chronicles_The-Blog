import { Connect, Query } from "../configs/mysql";
import { UserModel } from "../models/userModel";

const userService = {
  create: (user: UserModel) => {
    // console.log("Create a new user");
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO users (Name, user_name, user_email, user_password) VALUES ("${user.Name}", "${user.user_name}", "${user.user_email}", "${user.user_password}")`;
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
};

export default userService;
