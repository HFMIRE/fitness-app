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

    const allUsers = await User.find({});
    res.status(200).json({ success: true, data: allUsers });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      success: false,
    });
  }
}
