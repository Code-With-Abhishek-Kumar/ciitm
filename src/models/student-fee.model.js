import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the schema for student fee transactions
const feeSchema = new Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student", // Reference to a Student model (assuming you have one)
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },

    paymentDate: {
      type: Date,
      default: Date.now, // Automatically set to the current date and time
      required: true,
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

// Create the model using the schema
const Fee = mongoose.model("Fee", feeSchema);

export default Fee;
