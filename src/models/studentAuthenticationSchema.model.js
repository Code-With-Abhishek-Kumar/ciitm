import { Schema, model } from "mongoose";

// Define the schema for student authentication
// s -------> Student
const sAuthenticationSchema = new Schema({
  sEmail: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  sPassword: {
    type: String,
    required: true,
    trim: true,
  }
}, { timestamps:true });

// Export the model
const StudentAuthentication = model('StudentAuthentication', studentAuthenticationSchema);
export default StudentAuthentication;
