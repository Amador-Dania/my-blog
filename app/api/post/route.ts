import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const { name, title, content, createdAt } = await req.json();
  console.log(name, title, content);

  if (
    typeof name !== "string" ||
    typeof title !== "string" ||
    typeof content !== "string" ||
    typeof createdAt !== "string"
  ) {
    return Response.error();
  }

  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      createdAt: new Date(createdAt),
      author: {
        create: { name: name },
      },
    },
  });

  return NextResponse.json({ result });
}
