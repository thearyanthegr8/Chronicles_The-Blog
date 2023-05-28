import mysql from "mysql2";
import config from "./config";

const params = {
  user: config.mysql.user as string,
  password: config.mysql.password as string,
  database: config.mysql.database as string,
  host: config.mysql.host as string,
  port: config.mysql.port as number,
};

const Connect = async () =>
  new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection(params);

    connection.connect((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(connection);
    });
  });

const Query = async (connection: mysql.Connection, query: string) =>
  new Promise((resolve, reject) => {
    connection.query(query, connection, (error, result) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(result);
    });
  });

export { Connect, Query };
