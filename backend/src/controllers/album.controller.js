import AlbumSchemaJoi from '../validation/AlbumSchemaJoi.js';
import albumSchema from '../models/album.model.js';
import imageSchema from '../models/image.model.js';
import fs from 'fs';
import logger from '../middleware/loggerMiddleware.js';

export const createAlbum = async (req, res) => {
  try {
    let { albumDescription, albumName } = req.body;
    console.log(req.body);
    let { filename } = req.file;

    let { error } = AlbumSchemaJoi.validateAsync({
      albumImage: filename,
      albumDescription,
      albumName,
      Images: [],
    });



    // ! Handle Error When album Data are Blank

    if (error) {
      let error = new Error();
      error.message,
      error.status = 400;
      throw error;
    }

    let createdAlbum = await albumSchema.create({
      aName: albumName,
      aDescription: albumDescription,
      aImage: filename,
    });

    if (!createdAlbum) {
      // logger.error('Album creation failed');
      let error = new Error('Album creation failed');
      error.status = 500;
      throw error;
    }

    logger.info('Album created successfully');
    res.status(200).json({
      message: '1 Album Created 😊',
      // data: createdAlbum,
    });
  } catch (error) {
    // logger.error(`Error creating album: ${error.message}`);
    res.status(error.status || 500).json({
      message: error.message,
      error: true,
    });
  }
};

export const deleteAlbum = async (req, res) => {
  try {
    let { id } = req.params;
    // logger.info(`Attempting to delete album from Image Id: ${id}`);
    let findAlbum = await albumSchema.findByIdAndDelete(id);

    if (!findAlbum) {
      logger.error(`Album Not Found`);
      let error = new Error('Album Not Found');
      error.status = 404;
      throw error;
    }

    fs.rm(`public/upload/+${findAlbum.aImage}`, { recursive: true, force: true }, (err) => {
      if (err) {
        logger.error('Error deleting directory:', err);
        return;
      }
      // logger.info('Delete Image From File');
    });

    res.status(200).json({
      message: '1 Image Delete',
      findAlbum,
    });
  } catch (error) {
    logger.error(`Error creating album: ${error.message}`);
    res.status(error.status || 500).json({
      message: error.message,
      error: true,
    });
  }
};

export const getAlbum = async (req, res) => {
  try {
    // console.log(req.session.userId)
    logger.info('Fetching albums...');
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
      url: 'public/upload/' + filename,
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

export const deleteImage = async (req, res) => {
  try {
    let { id } = req.params;
    logger.info(`Attempting to delete image from Image Id: ${id}`);
    let findImage = await imageSchema.findById(id);
    // logger.info( {findImage}, `1 Image Find `);
    // console.log('ImageUrl',findImage.url);

    if (!findImage) {
      // logger.error(`image Not Found`);
      let error = new Error('image Not Found');
      error.status = 404;
      throw error;
    }

    fs.rm(
      `public/upload/b21b9eefca3324804f2fef7d.jpg`,
      { recursive: true, force: true },
      (err) => {
        if (err) {
          logger.error('Error deleting directory:', err);
          return;
        }
        res.status(200).json({
          message: '1 Image Delete From File',
        });
      }
    );
  } catch (error) {
    logger.error(`Error creating image: ${error.message}`);
    res.status(error.status || 500).json({
      message: error.message,
      error: true,
    });
  }
};
