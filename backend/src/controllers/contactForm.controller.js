import contactSchema from '../models/contact.model.js';

// Handle Contact Form Submission
export const Handle_ContactForm = async (req, res) => {
  try {
    // Extract data from the request body
    const { cName, cEmail, cNumber, cMessage, cCountry } = req.body;

    // Check if all required fields are present
    if (!cName || !cEmail || !cMessage || !cNumber || !cCountry) {
      const error = new Error(
        '⚠️ Name, Email, country, Number, and message are required fields. Please fill them out. ✍️'
      );
      error.status = 400;
      throw error;
    }

    // Create a new contact form entry in the database
    const createdForm = await contactSchema.create({
      cName,
      cEmail,
      cCountry,
      cNumber,
      cMessage,
    });

    // Send a success response
    res.status(200).json({
      message:
        'We’ve received your form. Our team will review your query and get back to you as soon as possible. 😊',
      data: createdForm,
    });
  } catch (error) {
    console.error(error.message);
    res.status(error.status || 500).json({
      message: error.message,
      error: true,
    });
  }
};

// Retrieve All Contact Form Data from DataBase
export const get_FormData = async (req, res) => {
  try {
    console.log(req.sect);
    // Fetch all contact form entries from the database, sorted by creation date
    const contactData = await contactSchema.find().sort({ createdAt: -1 });

    if (contactData.length === 0) {
      //! Handle Error if No Contact Form Data Found
      res.status(404).json({
        message: 'No Contact Data Found in Database',
      });
    } else {
      // Send the contact data in the response
      res.json(contactData);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: error.message,
      error: true,
    });
  }
};

// Delete Single Contact Form on the basic of ID.
export const delete_FormData = async (req, res) => {
  try {
    const { id } = req.params;

    // Remove contact form entry by ID
    const deleteMessage = await contactSchema.findByIdAndDelete(id);

    if (!deleteMessage) {
      res.status(404).json({
        message: 'Message Not Found 😥😥',
        error: true,
      });
    } else {
      res.json({
        deleteMessage,
        message: 'Form Message deleted successfully ❌',
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: error.message,
      error: true,
    });
  }
};

// View Single Contact Form n the basic of ID.
export const view_FormData = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch contact form entry by ID
    const formData = await contactSchema.findById(id);
    // ! Handle Error id form Data Not Found
    if (!formData) {
      res.status(404).json({
        message: 'Form Data Not Found',
        error: true,
      });
    } else {
      // Send the form data in the response
      res.json(formData);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: error.message,
      error: true,
    });
  }
};
