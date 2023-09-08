import { prisma } from "@/server/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const registerSchema = z.object({
  age: z.number(),
  name: z.string(),
  gender: z.enum(["male", "female"]),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { age, gender, name } = await registerSchema.parseAsync(body);

    const user = await prisma.user.create({
      data: { age, name, gender },
    });
    return NextResponse.json({ user }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ err: err }, { status: 500 });
  }
}
