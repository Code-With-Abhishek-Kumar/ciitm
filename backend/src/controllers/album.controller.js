import albumSchema from '../models/album.model.js';
import imageSchema from '../models/image.model.js'

// Create Album
export const createAlbum = async (req, res) => {
  try {
    let { albumDescription, albumName } = await req.body; //* req.body content the text data
    let { filename } = await req.file; //*  req.file content the file data

    // Debug the code

    // console.log('Album Name', albumName);
    // console.log('Album Description', albumDescription);
    // console.log('Album Image', req.file);

    console.log(filename);
    // ! Handle Error When album Data are Blanked
    if (!albumDescription || !albumName) {
      let error = new Error('Please Fill All Fields');
      error.status = 500;
      throw error;
    } else {
      let createdAlbum = albumSchema.create({
        aName: albumName,
        aDescription: albumDescription,
        aImage: filename,
      });

      if (!createdAlbum) {
        let error = new Error('Album Not Created');
        error.status = 500;
        throw error;
      }

      res.status(200).json({
        message: 'Album  Created😊',
        data: createdAlbum,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error: true,
    });
  }
};

// Get  All Album Data In form of Json
export const getAlbum = async (req, res) => {
  try {
    let getAlbum = await albumSchema.find().sort({ createdAt: -1 });
    console.log(getAlbum);
    await res.json(getAlbum);

    if (!getAlbum) {
      throw new Error('Sorry we are unable to Fetch Album Data');
    }
  } catch (error) {
    res.json({
      if(error) {
        res.json(error.message);
        error: true;
      },
    });
  }
};


//TODO Create Image Inside Album 
export const CreateImage = async (req, res) => {
try {


let  {aName , imageDescription}   = await req.body;
console.log(aName)

let findAlbum = await albumSchema.findOne({aName: aName})
console.log(findAlbum)


// ! Handle Error if Album not Found From DataBase
if(!findAlbum){
  const error = new Error("You are trying to Find Wrong Album");
  error.statusCode = 404; 
  throw error;

}

console.log(findAlbum._id)

// res.json({
//   findAlbum,
// })

// let createImage =  imageSchema.create({
//   albumID:findAlbum._id


// })



// {
//   albumID: {
//     type: Schema.Types.ObjectId,
//     ref: 'Album',
//   },

//   url: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//   },
// },
  
} catch (error) {
  console.log(error)
  if(error){
    res.status(error.statusCode).json({
      message: error.message,
      error : true,
    })
  }

}
};



// Find Image on the basic 