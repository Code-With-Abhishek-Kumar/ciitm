import otpGenerator from 'otp-generation';
import StudentSchema from '../models/student_Personal.model.js';
import Razorpay from 'razorpay';

export const Handle_newStudent_Record = async (req, res) => {
  try {
    // Extract student information from the request body
    const {
      name,
      email,
      mobileNumber,
      parentNumber,
      fatherName,
      motherName,
      tenthDivision,
      tenthBoard,
      twelveBoard,
      twelveDivision,
      course,
      amountPaid,
      discount,
      totalFee,
    } = req.body;

    // Validate required fields
    const handleRequiredField = () => {
      if (
        !name ||
        !email ||
        !mobileNumber ||
        !parentNumber ||
        !fatherName ||
        !motherName ||
        !tenthDivision ||
        !tenthBoard ||
        !twelveBoard ||
        !twelveDivision ||
        !course ||
        !amountPaid ||
        !discount ||
        !totalFee
      ) {
        throw new Error('All fields are required.');
      }
    };

    handleRequiredField(); // Call the validation function

    // Generate OTP
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    });
    console.log('Generated OTP:', otp);

    // Create a unique ID for the student
    const uniqueId = `CIITM/${course}/${otp}`;
    console.log('Unique ID:', uniqueId);

    // Create a new student record
    const newStudent = await StudentSchema.create({
      name,
      email,
      mobileNumber,
      parentNumber,
      fatherName,
      uniqueId,
      motherName,
      tenthDivision,
      tenthBoard,
      twelveBoard,
      twelveDivision,
      course,
      amountPaid,
      discount,
      totalFee,
    });

    // Send response
    res.json(newStudent);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({
      message: error.message,
      error: true,
    });
  }
};

export const Handle_StudentDocument_Upload = () => {
  // Function implementation goes here
};

export const Handle_StudentFee_Paid = () => {
  var instance = new Razorpay({
    key_id: 'YOUR_KEY_ID',
    key_secret: 'YOUR_SECRET',
  });

  var options = {
    amount: 50000, // amount in the smallest currency unit
    currency: 'INR',
    receipt: 'order_rcptid_11',
  };
  instance.orders.create(options, function (err, order) {
    console.log(order);
  });
};
