import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

export async function PATCH(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const { title, content, name } = await req.json();

  if (
    typeof title !== "string" ||
    typeof content !== "string" ||
    typeof name !== "string"
  ) {
    return Response.error();
  }

  try {
    await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        title: title,
        content: content,
      },
    });
    await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name,
      },
    });

    return NextResponse.json({ message: "Updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const deletePosts = prisma.post.deleteMany({
      where: {
        authorId: Number(id),
      },
    });

    const deleteUser = prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    await prisma.$transaction([deletePosts, deleteUser]);
    return NextResponse.json({ message: "Deleted Item" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
