import { Request, Response, NextFunction } from "express";
import { Connect, Query } from "../configs/mysql";

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

export default { getAllUsers };
