import { prisma } from "@/config/prisma";
import authOptions from "@/lib/auth";
import { AxiosError } from "axios";
import { getServerSession } from "next-auth/next";
 import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const session = await getServerSession(authOptions);
    console.log("this is session ======>", session);

    if (!session) {
      return NextResponse.json({ session, authOptions });
    }

    const user = await prisma.user.findUnique({
      where: { id: session?.user?.id },
    });

    console.log("this is user =====>", user );

    if (!user) {
      return NextResponse.json({ status: 404, message: "User not found" });
    }
    return NextResponse.json({
      status: 200,
      message: "Successfully retrieved user info",
      user,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "An error occurred",
      },
      { status: 500 }
    );
  }
};

export const PUT = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();

    if (
      !body.liveIn ||
      !body.streetAddress ||
      !body.dateOfBirth ||
      !body.gender
    ) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const userData = await prisma.user.update({
      where: { id },
      data: {
        liveIn: body.liveIn,
        streetAddress: body.streetAddress,
        dateOfBirth: body.dateOfBirth,
        gender: body.gender,
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
