import mongoose from 'mongoose';
const { Schema } = mongoose;

const contactSchool_Schema = new Schema({
  socialMedia: {
    facebook: {
      type: String,
      trim: true,
    },
    instagram: {
      type: String,
      trim: true,
    },
    linkedin: {
      type: String,
      trim: true,
    },
    twitter: {
      type: String,
      trim: true,
    },
    youtube: {
      type: String,
      trim: true,
    },
  },
  email: {
    generalInquiries: {
      type: String,
      required: true,
      trim: true,
    },
    admissions: {
      type: String,
      trim: true,
    },
    support: {
      type: String,
      trim: true,
    },
  },
  phoneNumbers: {
    mainOffice: {
      type: String,
      trim: true,
    },
    admissionsOffice: {
      type: String,
      trim: true,
    },
    supportDesk: {
      type: String,
      trim: true,
    },
  },
  physicalAddress: {
    address: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    zipCode: {
      type: String,
      required: true,
      trim: true,
    },
  },
  additionalPlatforms: {
    whatsapp: {
      type: String,
      trim: true,
    },
  },
});

// Create the model using the schema
const Contact = mongoose.model('Contact', contactSchool_Schema);

export default Contact;

// const newContact = new Contact({
//     officialWebsite: 'http://www.schoolwebsite.com',
//     socialMedia: {
//       facebook: 'http://www.facebook.com/schoolname',
//       instagram: 'http://www.instagram.com/schoolname',
//       linkedin: 'http://www.linkedin.com/company/schoolname',
//       twitter: 'http://www.twitter.com/schoolname',
//       youtube: 'http://www.youtube.com/schoolname'
//     },
//     email: {
//       generalInquiries: 'info@schoolwebsite.com',
//       admissions: 'admissions@schoolwebsite.com',
//       support: 'support@schoolwebsite.com'
//     },
//     phoneNumbers: {
//       mainOffice: '+1 (555) 123-4567',
//       admissionsOffice: '+1 (555) 234-5678',
//       supportDesk: '+1 (555) 345-6789'
//     },
//     physicalAddress: {
//       address: '123 School Lane',
//       city: 'City',
//       state: 'State',
//       zipCode: '12345'
//     },
//     contactFormUrl: 'http://www.schoolwebsite.com/contact',
//     additionalPlatforms: {
//       whatsapp: '+1 (555) 456-7890'
//     }
//   });
