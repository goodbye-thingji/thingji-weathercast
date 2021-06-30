import { Request, Response } from "express";

// TODO: Must be removed before production env.
export const testPage = async (req: Request, res: Response): Promise<void> => {
  res.send({
    msg: "test",
  });
};
