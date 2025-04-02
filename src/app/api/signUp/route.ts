import { prisma } from "@/config/prisma";
import { AxiosError } from "axios";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

interface SignUpRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const POST = async (req: NextRequest) => {
  try {
    const body: SignUpRequestBody = await req.json();
    const { firstName, lastName, email, password } = body;

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }
    const userExist = await prisma.user.findUnique({ where: { email } });

    if (userExist) {
      return NextResponse.json(
        {
          success: false,
          message: "User already Exist",
        },
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
        liveIn: null,
        streetAddress: null,
        dateOfBirth: null,
        gender: null,
        profilePic: null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "User data saved successfully",
      user: userData,
    });
  } catch (error) {
    const errorAxois = error as AxiosError;
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
      error: errorAxois.message || "Unknown error",
    });
  } finally {
    await prisma.$disconnect();
  }
};
