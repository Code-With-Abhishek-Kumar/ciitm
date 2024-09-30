import { Schema, model } from 'mongoose';

/* -------------------------------------------------------------------------- */
/*                           This Model Content                             */
/*                           Personal Detail of student                     */
/* -------------------------------------------------------------------------- */

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
      match: /.+\@.+\..+/,
    },

    mobileNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 10,
      maxlength: 15,
    },

    parentNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 10,
      maxlength: 15,
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
      required: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Export the schema
export default model('StudentPersonal', studentPersonalSchema);
