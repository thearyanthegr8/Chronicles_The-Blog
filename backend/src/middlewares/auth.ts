import { Request, Response, NextFunction } from "express";

function validateCookies(req: Request, res: Response, next: NextFunction) {
  const { cookie } = req.headers;
  console.log(req.cookies);
  next();
}

export { validateCookies };
