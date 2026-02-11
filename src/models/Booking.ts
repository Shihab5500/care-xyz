import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },
    serviceTitle: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    totalCost: {
      type: Number,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending", 
    },
  },
  { timestamps: true }
);

const Booking = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

export default Booking;