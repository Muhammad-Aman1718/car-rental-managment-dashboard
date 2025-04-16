import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/config/prisma";
import { getServerSession } from "next-auth";
import { AxiosError } from "axios";
import authOptions from "@/lib/auth";

interface carDataRequestBody {
  carName: string;
  fuelType: string;
  transmission: string;
  mileage: string;
  topSpeed: string;
  price: string;
  color: string;
  engineCapacity: string;
  seatingCapacity: string;
  registrationNumber: string;
  carType: string;
  modelYear: string;
  doors: string;
  //   imageUrl: string;
  purpose: string;
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
    const body: carDataRequestBody = await req.json();
    const {
      carName,
      fuelType,
      transmission,
      mileage,
      topSpeed,
      price,
      color,
      engineCapacity,
      seatingCapacity,
      registrationNumber,
      carType,
      modelYear,
      doors,
      //   imageUrl,
      purpose,
    } = body;

    console.log("this is car data body ===========>", body);

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
      !purpose
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "requried all feilds",
        },
        { status: 400 }
      );
    }

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
        // imageUrl: null,
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

export const PUT = async (req: NextRequest) => {
  try {
    const body: carDataRequestBody = await req.json();
    const {
      carName,
      fuelType,
      transmission,
      mileage,
      topSpeed,
      price,
      color,
      engineCapacity,
      seatingCapacity,
      registrationNumber,
      carType,
      modelYear,
      doors,
      //   imageUrl,
      purpose,
    } = body;

    const carData = await prisma.car.update({
      where:{}
    })

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
  }
};
