import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request: Request) => {
  try {
    const { email, password } = await request.json();

    await connectDB();

    // ১. ইউজার আছে কিনা চেক করা
    const user = await User.findOne({ email });
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // ২. পাসওয়ার্ড মিলছে কিনা চেক করা
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return new NextResponse("Invalid credentials", { status: 401 });
    }

    // ৩. সফল হলে ইউজারের তথ্য পাঠানো
    return new NextResponse(JSON.stringify({
        message: "Login successful",
        user: {
            name: user.name,
            email: user.email,
            id: user._id
        }
    }), { status: 200 });

  } catch (err: any) {
    return new NextResponse(err.message, { status: 500 });
  }
};