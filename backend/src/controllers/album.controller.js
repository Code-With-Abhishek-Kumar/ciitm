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
    if (!albumDescription || !albumName || !filename) {
      // logger.error('Some Field are Missing in Your Album');
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
      let error = new Error('Album creation failed');
      error.status = 500;
      throw error;
    }

    // logger.info('Album created successfully');
    res.status(200).json({
      message: '1 Album Created 😊',
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

// Delete Album on the basic of id
export const deleteAlbum = async (req, res) => {
  try {
    let { id } = req.params;

    let findAlbum = albumSchema.findById(id);
    console.log(findAlbum);
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

    // logger.info(
    //   { albums: getAlbum },
    //   `Fetched ${getAlbum.length} albums successfully`
    // );

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
    // console.log('cookies', req.cookies);
    // console.log('user', req.user);
    // console.log('', req.body);
    const { albumName, imageName, imageDescription } = req.body;
    const { filename } = req.file;

    //    userID: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'AuthenticationSchema',

    //   },
    // console.log("Cookies",req.cookies.userId)
    // console.log(`Welcome User ID: ${req.session.userId}!`);
    //! Throw Error if Field are Blank
    if (!filename || !albumName) {
      const error = new Error('Some Field Are Blank');
      error.status = 404;
      throw error;
    }
    //  console.log("fileName;-", filename)
    //  console.log('Album Name;-' , albumName)

    const findAlbum = await albumSchema.findOne({ aName: albumName });
    // logger.info(`Attempting to create album: ${findAlbum.images}`);

    logger.info(
      {
        albumName,
        imageName,
        filename,
        imageDescription,
        findAlbum,
      },
      'Fetch 1 Album found'
    );

    //! Throw Error if Album not found
    if (!findAlbum) {
      const error = new Error('Please Enter Valid Album Name');
      error.status = 404;
      throw error;
    }

    // logger.info(`Album ID: ${findAlbum._id}`);

    // // Create the image record
    const createImage = await imageSchema.create({
      albumID: findAlbum._id,
      url: '/public/upload/' + filename,
      description: imageDescription,
    });

    await findAlbum.Images.push(createImage._id);
    await findAlbum.save();

    logger.info(`Image created with ID: ${createImage._id}`);

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
