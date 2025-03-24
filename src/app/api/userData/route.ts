import { prisma } from "@/config/prisma";
import { showToast } from "@/utils/showToast";
import { AxiosError } from "axios";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export const POST = async (req: NextRequest, res: NextResponse) => {
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

    const session = await getServerSession(authOptions);
    console.log("Session Data: ", session); // 👈 Check if session is null

    if (!session) {
      return NextResponse.json(
        { success: false, message: "User is not authenticated" },
        { status: 401 }
      );
    }

    console.log("User Email from Session: ", session.user?.email);

    const userEmail = session?.user?.email;

    console.log("this is user email ======>", userEmail);

    const userData = await prisma.user.update({
      where: { email: userEmail },
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
