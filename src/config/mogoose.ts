import mongoose from "mongoose";

interface Connection {
  isConnected?: boolean;
}

// const connection: Connection = {};

const connection: Connection = (global as any).mongoose || {};

export const connectDB = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("Database already connected.");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.DATABASE_URL as string);
    connection.isConnected = db.connections[0].readyState === 1;
    console.log("Database connected.");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};
