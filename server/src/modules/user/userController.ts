import { Request, Response, NextFunction } from "express";
import fs from "fs/promises";

import { catchAsync } from "../../helpers/utils";

export const getUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await fs.readFile("src/mockup/data.json", {
      encoding: "utf8",
    });

    res.status(200).json({
      users: JSON.parse(data),
    });
  }
);
