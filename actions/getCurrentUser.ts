import prisma from "@/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const CurrentUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
      include: { orders: true },
    });

    if (!CurrentUser) {
      return null;
    }

    return {
      ...CurrentUser,
      createdAt: CurrentUser.createdAt.toISOString(),
      updatedAt: CurrentUser.updatedAt.toISOString(),
      emailVerified: CurrentUser.emailVerified?.toISOString() || null,
    };
  } catch (error: any) {
    return null;
  }
}
