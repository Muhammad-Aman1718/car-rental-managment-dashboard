// // import { connectDB } from "@/config/mogoose";
// import userModel from "@/model/students";
// import { NextResponse } from "next/server";
// // connectDB();

// export const GET = async () => {
//   try {
//     const data = await userModel.find();
//     console.log("data is access");
//     return NextResponse.json({ messega: "success", data });
//   } catch (err) {
//     return NextResponse.json({ messega: "fail", err });
//   }
// };

import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const data = await prisma.studentModel.findMany();
    return NextResponse.json({ message: "success", data });
  } catch (err) {
    return NextResponse.json({ message: "fail", error: err });
  }
};
