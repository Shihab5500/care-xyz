
// import { connectDB } from "../../../../lib/db"; 
// import User from "../../../../models/User";

import { connectDB } from "@/lib/db"; 
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request: Request) => {
  try {
    const { name, email, password } = await request.json();

    await connectDB();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new NextResponse("Email is already in use", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new NextResponse(JSON.stringify({
        message: "User registered",
        user: {
            name: newUser.name,
            email: newUser.email,
            id: newUser._id
        }
    }), {
      status: 201,
    });

  } catch (err: any) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};