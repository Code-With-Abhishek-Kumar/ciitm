import { Schema, model } from 'mongoose';


const courseSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
      trim: true,
    },

    courseCode: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    duration: {
      type: String,
      required: true, 
      trim: true,
    },

    mode: {
      type: String,
      enum: ['Regular', 'Distance'], 
      required: true,
    },

    fees: {
      type: Number,
      required: true,
      min: 0, 
    },

    university: {
      type: String,
      required: true,
      trim: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true, 
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, 
  }
);


const Course = model('Course', courseSchema);

export default Course;
