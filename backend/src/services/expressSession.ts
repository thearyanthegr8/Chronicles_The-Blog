import session from "express-session";

declare module "express-session" {
  export interface SessionData {
    authenticated: boolean;
    user: {
      id: number;
      username: string;
      email: string;
      name: string;
    };
  }
}
