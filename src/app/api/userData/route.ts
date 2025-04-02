import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/config/prisma";
import { AxiosError } from "axios";
import { getServerSession } from "next-auth/next";
import authOptions from "@/lib/auth";

export const GET = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { success: false, message: "Seesion not found" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: session?.user?.id },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "User data get successfully",
      user,
    });
  } catch (error) {
    const errorAxois = error as AxiosError;
    return NextResponse.json({
      success: false,
      message: "Data not get",
      error: errorAxois.message || "Unknown error",
    });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { livesIn, streetAddress, dateOfBirth, gender } = body;
    const session = await getServerSession(authOptions);

    const userDataUpdate = await prisma.user.update({
      where: { id: session?.user?.id },
      data: {
        liveIn: livesIn,
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
