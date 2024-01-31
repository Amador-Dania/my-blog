import { db } from "@/app/utils.ts/getDb";

export async function GET() {
  const res = await db.many("SELECT * FROM posts");
  return Response.json({ res });
}

export async function POST(req: Request) {
  const data = await req.json();
  const result = await db.one(
    "INSERT INTO posts (title, author, publication_date, content) VALUES(${title}, ${author}, ${publication_date}, ${content}) RETURNING *",
    {
      title: data.title,
      author: data.author,
      publication_date: data.publicationDate,
      content: data.content,
    }
  );

  console.log(result);

  // We can use every supported variable syntax at the same time, if needed:

  return Response.json({
    data,
  });
}
