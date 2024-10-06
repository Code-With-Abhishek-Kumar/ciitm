import { Schema, model } from 'mongoose';

// Define the schema for student authentication

const AuthenticationSchema = new Schema(
  {
    Email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      default: 'student',
      enum: ['student', 'admin'],
    },
  },
  { timestamps: true }
);

// Export the model
const Authentication = model('AuthenticationSchema', AuthenticationSchema);
export default Authentication;
