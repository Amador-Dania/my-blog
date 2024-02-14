import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

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

    const transaction = await prisma.$transaction([deletePosts, deleteUser]);
    console.log("Post deleted", transaction);
    return NextResponse.json({ message: "Deleted Item" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting post", error);
    console.log("Error deleting post", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
