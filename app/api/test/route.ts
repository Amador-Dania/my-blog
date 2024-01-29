import getDb from "@/app/utils.ts/getDb";
import type { NextApiRequest, NextApiResponse } from "next";

const db = getDb();

export async function GET(request: NextApiRequest) {
  return Response.json({
    message: "Hello World!",
  });
}
