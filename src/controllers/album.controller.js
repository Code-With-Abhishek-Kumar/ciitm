import albumSchema from "../models/album.model.js";

// Create Album
export const createAlbum = async (req, res) => {
  try {
    let { albumDescription, albumName } = await req.body; //* req.body content the text data
    let { filename } = await req.file; //*  req.file content the file data

    // Debug the code

    console.log("Album Name", albumName);
    console.log("Album Description", albumDescription);
    console.log("Album Image", req.file);

    console.log(filename);
    // ! Handle Error When album Data are Blanked
    if (!albumDescription || !albumName) {
      let error = new Error("Please Fill All Fields");
      error.status = 500;
      throw error;
    } else {
      let createdAlbum = albumSchema.create({
        aName: albumName,
        aDescription: albumDescription,
        aImage: filename,
      });

      if (!createdAlbum) {
        let error = new Error("Album Not Created");
        error.status = 500;
        throw error;
      }

      res.status(200).json({
        message: "Form Created 😊",
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

// Get the Album data
export const getAlbum = async (req, res) => {
  try {
    let getAlbum = await albumSchema.find().sort({ createdAt: -1 });
    console.log(getAlbum)
    await res.json(getAlbum);

    if (!getAlbum) {
      throw new Error("Sorry we are unable to Fetch Album Data");
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
