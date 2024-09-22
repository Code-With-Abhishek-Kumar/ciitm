import { Schema, model } from "mongoose";

const studentPersonalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },

    mobileNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    parentNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    fatherName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    motherName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    uniqueId: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    tenthDivision: {
      type: String,
      required: true,

      lowercase: true,
      trim: true,
    },

    tenthBoard: {
      type: String,
      required: true,
      lowercase: true,

      trim: true,
    },

    twelveBoard: {
      type: String,
      required: true,

      lowercase: true,
      trim: true,
    },

    twelveDivision: {
      type: String,
      required: true,
      lowercase: true,

      trim: true,
    },

    course: {
      type: String,
      require: true,
      lowercase: true,
    },
    // Personal Fee detail

    amountPaid: {
      type: Number,
      required: true,
      default: 0,
    },

    discount: {
      type: Number,
      default: 0,
    },

    totalFee: {
      type: Number,
      required: true,
    },

    dueFee: {
      type: Number,
      required: true,
      default: function () {
        return this.totalFee - this.amountPaid - this.discount;
      },
    },
  },
  {
    timestamps: true,
  },
);

studentPersonalSchema.index({ email: 1 });
studentPersonalSchema.index({ mobileNumber: 1 });
studentPersonalSchema.index({ parentNumber: 1 });

// Export the schema

export default model("studentPersonal", studentPersonalSchema);
