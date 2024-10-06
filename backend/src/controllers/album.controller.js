import albumSchema from '../models/album.model.js';
import imageSchema from '../models/image.model.js';
import lolcat from 'lolcatjs';
import logger from '../middleware/loggermiddleware.js';

// Create Album
export const createAlbum = async (req, res) => {
  try {
    let { albumDescription, albumName } = req.body;
    let { filename } = req.file;

    logger.info(`Attempting to create album: ${albumName}`);

    // Handle Error When album Data are Blank
    if (!albumDescription || !albumName) {
      logger.error('Album description or name is missing');
      let error = new Error('Please Fill All Fields');
      error.status = 400; // Use 400 for bad requests
      throw error;
    }

    let createdAlbum = await albumSchema.create({
      aName: albumName,
      aDescription: albumDescription,
      aImage: filename,
    });

    if (!createdAlbum) {
      logger.error('Album creation failed');
      let error = new Error('Album Not Created');
      error.status = 500;
      throw error;
    }

    logger.info('Album created successfully');
    res.status(200).json({
      message: 'Album Created 😊',
      data: createdAlbum,
    });
  } catch (error) {
    logger.error(`Error creating album: ${error.message}`);
    res.status(error.status || 500).json({
      message: error.message,
      error: true,
    });
  }
};

// Get All Album Data In form of Json
export const getAlbum = async (req, res) => {
  try {
    let getAlbum = await albumSchema.find().sort({ createdAt: -1 });

    if (!getAlbum.length) {
      logger.warn('No albums found');
      return res.status(404).json({
        message: 'No albums found',
        error: true,
      });
    }

    logger.info(
      { albums: getAlbum },
      `Fetched ${getAlbum.length} albums successfully`
    );

    res.json(getAlbum);
  } catch (error) {
    logger.error(`Error fetching albums: ${error.message}`);
    res.status(500).json({
      message: error.message,
      error: true,
    });
  }
};

// Create Image Inside Album
export const CreateImage = async (req, res) => {
  try {
    // Logging request data
    console.log('cookies', req.cookies);
    console.log('user', req.user);
    console.log('', req.body);
    const { albumName, imageName, imageDescription } = req.body;
    const { filename } = req.file;

    //    userID: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'AuthenticationSchema',

    //   },

    //   albumID: {
    //     type: Schema.Types.String,
    //     ref: 'Album',
    //   },

    //   albumName: {
    //     type: String,
    //   },

    //   imageName: {
    //     type: String,
    //   },

    //   url: {
    //     type: String,
    //     required: true,
    //   },
    //   imageDescription: {
    //     type: String,
    //   },
    // },
    //! Throw Error if Album not found
    if (!filename || !albumName) {
      const error = new Error('Album Not Found');
      error.status = 404;
      throw error;
    }

    //  console.log("fileName;-", filename)
    //  console.log('Album Name;-' , albumName)

    const findAlbum = await albumSchema.findOne({ aName: albumName });

    logger.info(
      {
        albumName,
        imageName,
        imageDescription,
        findAlbum,
      },
      'Fetch 1 Album found'
    );

    //! Throw Error if Album not found
    if (!findAlbum) {
      const error = new Error('Album Not Found');
      error.status = 404;
      throw error;
    }

    // logger.info(`Album ID: ${findAlbum._id}`);

    // // Create the image record
    // const createImage = await imageSchema.create({
    //   albumID: findAlbum._id,
    //   url: filename,
    //   description: imageDescription,
    // });

    // return res.status(201).json({
    //   message: 'Image added to album successfully',
    //   data: createImage,
    // });
  } catch (error) {
    logger.error(`Error creating image: ${error.message}`);

    return res.status(error.status || 500).json({
      message: error.message || 'Internal Server Error',
      error: true,
    });
  }
};
