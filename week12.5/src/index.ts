
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(id: number, password: string, name: string, email: string) {
  const res = await prisma.user.create({
    data: {
       id,
       name,
       email,
        password,
        
    }
  })
  console.log(res);
}

insertUser(1, "123456", "harkirat", "singh")