import { prisma } from "@/config/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// const prisma = new PrismaClient();

export const POST = async (req: any) => {
  try {
    const body = await req.json();
    console.log("Body:", body);

    if (!body.firstName || !body.lastName || !body.email || !body.password) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const userData = await prisma.user.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      success: true,
      message: "User data saved successfully",
      student: userData,
    });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
      error: error.message || "Unknown error",
    });
  } finally {
    await prisma.$disconnect();
  }
};
