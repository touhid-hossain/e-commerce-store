import prisma from "@/libs/prismadb";

export default async function getUsers() {
  try {
    const user = prisma?.user.findMany();
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
}
