import { Schema, model } from 'mongoose';

const ImageSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'AuthenticationSchema',
    },

    albumID: {
      type: Schema.Types.String,
      ref: 'Album',
    },

    albumName: {
      type: String,
    },

    imageName: {
      type: String,
    },

    url: {
      type: String,
      required: true,
    },
    imageDescription: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Image', ImageSchema);
