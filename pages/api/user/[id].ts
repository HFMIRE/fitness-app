import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "../../../lib/mongodb";
import User from "../../../model/user";
type ResponseData = {
  success: boolean;
  data?: Array<{}>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    connectMongo();
    const users = User;
    const { id } = req.query;

    const singleUser = await users.findById({ _id: id }).exec();

    res.status(200).json({ success: true, data: singleUser });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      success: false,
    });
  }
}
