import { Request, Response, NextFunction } from "express";
import { Connect, Query } from "../configs/mysql";
import bcrypt from "bcrypt";
import userService from "../services/userService";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  let query = "SELECT * FROM users";

  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((result) => {
          return res.status(200).json({
            result,
          });
        })
        .catch((error) => {
          return res.status(500).json({
            message: error.message,
            error,
          });
        })
        .finally(() => {
          connection.end();
        });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const getUserByEmail = async (email: string) => {
  return new Promise((resolve, reject) => {
    let query = `SELECT * FROM users WHERE user_email = "${email}"`;

    Connect()
      .then((connection) => {
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
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getUserByName = async (name: string) => {
  return new Promise((resolve, reject) => {
    let query = `SELECT * FROM users WHERE user_name = "${name}"`;

    Connect()
      .then((connection) => {
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
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { username, email, password } = req.body;

  try {
    const existingUserEmail = (await getUserByEmail(email)) as any[];
    const existingUserName = (await getUserByName(username)) as any[];

    console.log("existingUser: ", existingUserEmail);

    if (existingUserEmail.length > 0 || existingUserName.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await userService.create({
      user_email: email,
      user_password: hashedPassword,
      user_name: username,
    });
    console.log("New user created: ", result);
    return res.status(201).json({ result });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export default { getAllUsers, getUserByEmail, register };
