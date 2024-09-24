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
