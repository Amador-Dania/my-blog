import getDb from "../../utils.ts/db";
import type { NextApiRequest, NextApiResponse } from "next";

import Post from "../../types/post";

const db = getDb();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("hello");

  switch (req.method) {
    case "GET":
      await GET(res);
      break;
    case "POST":
      await POST(req, res);
      break;
    default:
      res.status(405).end(); //Method Not Allowed
      break;
  }
}

export async function GET(res: NextApiResponse) {
  //   const posts: Post[] = db.one("SELECT * FROM posts WHERE id = 1");
  //   res.json(posts);

  try {
    const entries = await db.any("SELECT * FROM posts");
    res.status(200).json(entries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error retrieving entries " });
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  //   const posts = db.one("SELECT * FROM posts WHERE id = 1");
  //   res.json(posts);

  const { title, author, publication_date, content } = req.body;
  try {
    await db.none(
      "INSERT INTO posts (title, author, publication_date, content) VALUES ($1, $2, $3, $4)",
      [title, author, publication_date, content]
    );
    res.status(201).json({ message: "Entry created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating entry" });
  }
}

// localhost:3000/api/post
// POST api/posts
