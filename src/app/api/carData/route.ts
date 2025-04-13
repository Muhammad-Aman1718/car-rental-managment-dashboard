import { prisma } from "@/config/prisma";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

interface carDataRequestBody {
  //   adminId: string;
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
  //   hasAC: boolean;
  //   imageUrl: string;
  //   purpose: string;
}

export const POST = async (req: NextRequest) => {
  try {
    const body: carDataRequestBody = await req.json();
    const {
      //   adminId,
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
      //   hasAC,
      //   imageUrl,
      //   purpose,
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
      !doors
      // !hasAC ||
      //   !purpose
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
        // adminId: null,
        carName: body.carName,
        fuelType: body.fuelType,
        transmission: body.transmission,
        mileage: body.mileage,
        topSpeed: body.topSpeed,
        price: body.price,
        color: body.color,
        engineCapacity: body.engineCapacity,
        seatingCapacity: body.seatingCapacity,
        registrationNumber: body.registrationNumber,
        carType: body.carType,
        modelYear: body.modelYear,
        doors: body.doors,
        // hasAC: null,
        // imageUrl: null,
        // purpose: null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Car data saved successfully",
      car: carData,
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
