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

    picture: {
      type: String,
      trim: true,
    },

    provider_displayName: {
      type: String,
      required: true,
      capitalize: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    lastLogin: {
      type: Date,
    },

    role: {
      type: String,
      required: true,
      enum: ['student', 'teacher', 'admin'],
      default: 'student',
    },
  },
  { timestamps: true }
);

const StudentAuthentication = model(
  'StudentAuthentication',
  studentAuthenticationSchema
);

export default StudentAuthentication;
