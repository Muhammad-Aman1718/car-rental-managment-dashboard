// import userModel from "@/model/students";
// import { NextResponse } from "next/server";
// import { connectDB } from "@/config/mogoose";
// connectDB();

// export const POST = async (req: any) => {
//   try {
//     const body = await req.json();
//     console.log("Body", body);
//     if (
//       !body.cnic ||
//       !body.firstName ||
//       !body.lastName ||
//       !body.email ||
//       !body.address
//     ) {
//       return NextResponse.json(
//         { success: false, message: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     const studentData = new userModel(body);
//     console.log("student Data : ", studentData);
//     await studentData.save();

//     return NextResponse.json({ message: "success student data" });
//   } catch (error) {
//     return NextResponse.json({
//       message: "something went wrong",
//       error: JSON.stringify(error),
//     });
//   }
// };

// import { PrismaClient } from "@prisma/client";
import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";

// const prisma = new PrismaClient();

export const POST = async (req: any) => {
  try {
    const body = await req.json();
    console.log("Body:", body);

    // Required fields check
    if (
      !body.cnic ||
      !body.firstName ||
      !body.lastName ||
      !body.email ||
      !body.address
    ) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Create student in MongoDB via Prisma
    const studentData = await prisma.studentModel.create({
      data: {
        cnic: body.cnic,
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        address: body.address,
      },
    });

    console.log("Student Data:", studentData);

    return NextResponse.json({
      success: true,
      message: "Student data saved successfully",
      student: studentData,
    });
  } catch (error) {
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
