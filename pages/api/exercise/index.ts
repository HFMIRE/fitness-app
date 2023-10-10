import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "../../../lib/mongodb";
import Exercise from "../../../model/exercise";

type ResponseData = {
  success: boolean;
  data?: Array<{}>;
};
const PAGE_SIZE = 1000;
async function reqExercise(offset: number) {
  console.log("offset", offset);
  try {
    const res = await fetch(
      `https://api.api-ninjas.com/v1/exercises?offset=${offset}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": "p3wWeednaFbN4tw+h4/Qfg==R4Bdv91CKRiKFEMJ",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function getExercise() {
  let exerciseRecord: [] = [];
  let keepGoing = true;
  let offset = 0;
  while (keepGoing) {
    let response = await reqExercise(offset);
    // console.log(response);
    await exerciseRecord.push.apply(exerciseRecord, response);
    offset += 1000;

    if (response.length < PAGE_SIZE) {
      keepGoing = false;
      return exerciseRecord;
    }
  }
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await connectMongo();

  const { method } = req;
  switch (method) {
    case "GET":
      // try {
      //   const allExercise = await Exercise.find({});
      //   res.status(200).json({ success: true, data: allExercise });
      // } catch (e) {
      //   console.log(e);
      //   res.status(400).json({
      //     success: false,
      //   });
      // }

      break;

    case "POST":
      try {
        await getExercise();
        // console.log("excerise", exerciseData);
        // const addNewExericse = await Exercise.create();
        // res.status(200).json({ success: true, data: addNewExericse });
      } catch (e) {
        console.log(e);
        res.status(400).json({
          success: false,
        });
      }
      break;
  }
}
