import { Schema, model } from 'mongoose';

const ImageSchema = new Schema(
  {
    albumID: {
      type: Schema.Types.ObjectId,
      ref: 'Album',
    },

    albumName: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Image', ImageSchema);
