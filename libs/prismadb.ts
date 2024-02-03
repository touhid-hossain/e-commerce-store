import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();

console.log("PRISMA DB CLIENT -- ", client);

if (process.env.NODE_ENV != "production") globalThis.prisma = client;

export default client;
