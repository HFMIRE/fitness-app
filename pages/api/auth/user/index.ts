import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  switch (req.method) {
    case "POST":
      try {
        const newUser = await prisma.user.create({ data: req.body });
        console.log("Created New User");
        res.status(200).json({ success: true, data: newUser });
      } catch (e) {
        res.status(400).json({ success: false, msg: e });
      }
  }
}
