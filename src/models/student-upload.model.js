import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the schema for student uploads
const studentUploadSchema = new Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudentPersonal", // Reference to the StudentPersonal model
      required: true,
    },
    aadharCardUrl: {
      type: String,
      trim: true,
    },
    tenthMarksheetUrl: {
      type: String,
      trim: true,
    },
    twelfthMarksheetUrl: {
      type: String,
      trim: true,
    },
    photoUrl: {
      type: String,
      trim: true,
    },
    clcUrl: {
      type: String,
      trim: true,
    },
    adminCard10Url: {
      type: String,
      trim: true,
    },

    adminCard12Url: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  },
);

// Create the model using the schema
const StudentUpload = mongoose.model("StudentUpload", studentUploadSchema);

export default StudentUpload;
