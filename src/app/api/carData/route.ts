import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/config/prisma";
import { getServerSession } from "next-auth";
import { AxiosError } from "axios";
import authOptions from "@/lib/auth";
import cloudinary from "@/lib/cloudinary";

export const GET = async () => {
  try {
    const session = await getServerSession(authOptions);
    console.log("this is get session", session);

    if (!session) {
      return NextResponse.json(
        { success: false, message: "Seesion not found" },
        { status: 400 }
      );
    }

    console.log("this is get session pass");

    const allCarsData =
      session?.user.role === "ADMIN"
        ? await prisma.car.findMany({ where: { adminId: session?.user.id } })
        : await prisma.car.findMany();

    console.log("this is all carData", allCarsData);

    return NextResponse.json({
      success: true,
      message: "All data of cars is get",
      data: allCarsData,
    });
  } catch (error) {
    const errorAxios = error as AxiosError;
    // console.error("this is the api error ====> ", errorAxios);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
        error: errorAxios.message,
      }
      // { status: 500 }
    );
  }
};

async function uploadFile(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "uploads" },
      (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error); // ✅ Better logging
          reject(error);
        } else if (result?.secure_url) {
          resolve(result.secure_url);
        } else {
          reject(new Error("Upload failed without error message"));
        }
      }
    );

    stream.end(buffer); // Ensure buffer is properly ended
  });
}

export const POST = async (req: NextRequest) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized. Admin ID not found.",
        },
        { status: 401 }
      );
    }
    const formData = await req.formData();

    const carName = formData.get("carName") as string;
    const fuelType = formData.get("fuelType") as string;
    const transmission = formData.get("transmission") as string;
    const mileage = formData.get("mileage") as string;
    const topSpeed = formData.get("topSpeed") as string;
    const price = formData.get("price") as string;
    const color = formData.get("color") as string;
    const engineCapacity = formData.get("engineCapacity") as string;
    const seatingCapacity = formData.get("seatingCapacity") as string;
    const registrationNumber = formData.get("registrationNumber") as string;
    const carType = formData.get("carType") as string;
    const modelYear = formData.get("modelYear") as string;
    const doors = formData.get("doors") as string;
    const purpose = formData.get("purpose") as string;
    const image = formData.get("image") as File;

    if (
      !carName ||
      !fuelType ||
      !transmission ||
      !mileage ||
      !topSpeed ||
      !price ||
      !color ||
      !engineCapacity ||
      !seatingCapacity ||
      !registrationNumber ||
      !carType ||
      !modelYear ||
      !doors ||
      !purpose ||
      !image
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "requried all feilds",
        },
        { status: 400 }
      );
    }

    const imageUrl = await uploadFile(image);

    const carData = await prisma.car.create({
      data: {
        adminId: session?.user?.id,
        carName: carName,
        fuelType: fuelType,
        transmission: transmission,
        mileage: mileage,
        topSpeed: topSpeed,
        price: price,
        color: color,
        engineCapacity: engineCapacity,
        seatingCapacity: seatingCapacity,
        registrationNumber: registrationNumber,
        carType: carType,
        modelYear: modelYear,
        doors: doors,
        imageUrl: imageUrl,
        purpose: purpose,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Car data saved successfully",
      car: carData,
    });
  } catch (error) {
    const errorAxios = error as AxiosError;
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
      error: errorAxios.message || "Unknown error",
    });
  } finally {
    await prisma.$disconnect();
  }
};
