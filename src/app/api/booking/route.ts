import { connectDB } from "../../../lib/db";
import Booking from "../../../models/Booking";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// বুকিং তৈরি এবং ইমেইল পাঠানো
export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connectDB();
    
    // ১. ডাটাবেসে সেভ করা
    const newBooking = new Booking(body);
    await newBooking.save();

    // ২. ইমেইল পাঠানো (Email Invoice)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: body.userEmail,
      subject: `Booking Confirmed: ${body.serviceTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #6d28d9;">Care.xyz - Booking Invoice</h2>
          <p>Hi there,</p>
          <p>Thank you for booking with us. Here are your booking details:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <tr style="background-color: #f3f3f3;">
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Service</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${body.serviceTitle}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Start Date</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${body.startDate}</td>
            </tr>
            <tr style="background-color: #f3f3f3;">
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Duration</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">${body.duration} Days</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Total Cost</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd; color: green; font-weight: bold;">${body.totalCost} Tk</td>
            </tr>
             <tr>
              <td style="padding: 10px; border: 1px solid #ddd;"><strong>Status</strong></td>
              <td style="padding: 10px; border: 1px solid #ddd;">Pending</td>
            </tr>
          </table>

          <p style="margin-top: 20px;">We will contact you shortly at this address: <em>${body.address}</em></p>
          <p>Thanks,<br>Team Care.xyz</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new NextResponse(JSON.stringify({ message: "Booking Created & Email Sent" }), { status: 201 });
  } catch (err: any) {
    console.error(err);
    return new NextResponse("Error: " + err.message, { status: 500 });
  }
};


export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return new NextResponse("Email required", { status: 400 });
    }

    await connectDB();
    const bookings = await Booking.find({ userEmail: email }).sort({ createdAt: -1 });

    return new NextResponse(JSON.stringify(bookings), { status: 200 });
  } catch (err: any) {
    return new NextResponse("Error: " + err.message, { status: 500 });
  }
};