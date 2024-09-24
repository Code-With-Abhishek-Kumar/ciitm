import { Schema, model } from 'mongoose';

const studentAuthenticationSchema = new Schema(
  {
    provider_Name: {
      type: String,
      required: true,
    },

    providerId: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    lastLogin: {
      type: Date,
    },
  },
  { timestamps: true }
);

const StudentAuthentication = model(
  'StudentAuthentication',
  studentAuthenticationSchema
);

export default StudentAuthentication;
