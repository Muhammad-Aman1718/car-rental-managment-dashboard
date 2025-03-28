import { prisma } from "@/config/prisma";
import authOptions from "@/lib/auth";
import { AxiosError } from "axios";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { liveIn, streetAddress, dateOfBirth, gender } = body;
    console.log("this is body : ", body);

    if (!liveIn || !streetAddress || !dateOfBirth || !gender) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const session = await getServerSession(authOptions);

    const userDataUpdate = await prisma.user.update({
      where: { id: session?.user?.id },
      data: {
        liveIn: liveIn,
        streetAddress: streetAddress,
        dateOfBirth: dateOfBirth,
        gender: gender,
      },
    });

    return NextResponse.json({
      success: true,
      message: "User data saved successfully",
      user: userDataUpdate,
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
