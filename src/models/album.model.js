import { Schema, model } from "mongoose";

// a ----> Album

// Create new AlbumSchema Here with timestamps
const AlbumSchema = new Schema(
  {
    aName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    aImage: {
      type: String,
      required: true,
    },
    aDescription: {
      type: String,
      required: true,
    },

    ImageID: [
      {
        type: Schema.Types.ObjectId,
        ref: "Image",
      },
    ],
  },
  {
    timestamps: true,
  },
);

// Export the Album schema
let Album = model("Album", AlbumSchema);
export default Album;
