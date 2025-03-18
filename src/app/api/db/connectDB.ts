import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    process.exit(1);
    return Response.json(
      { message: "An unknown error occurred" },
      { status: 400 }
    );
  }
};
