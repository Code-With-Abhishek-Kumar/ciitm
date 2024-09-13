import mongoose from "mongoose";
import crypto from "node:crypto";
import otpGenerator from "otp-generation";
// import contactSchema from '../models/contact.model.js';
import StudentSchema from "../models/student_Personal.model.js";


export const StudentPersonal_Detail = async (req, res) => {
  try {
    /* -------------------------------------------------------------------------- */
    /*                     Extract Student Information from Request Body           */
    /* -------------------------------------------------------------------------- */

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

    /* -------------------------------------------------------------------------- */
    /*                     Handle Error if any Field are blank                    */
    /* -------------------------------------------------------------------------- */

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
      throw new Error("All Field Are Required "); // ! Handle New Error
    }

    /* -------------------------------------------------------------------------- */
    /*                              generate  Otp                                           */
    /* -------------------------------------------------------------------------- */

    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    });

    console.log(otp);

    /* -------------------------------------------------------------------------- */
    /*                         Create a Unique Id for Each Student                                          */
    /* -------------------------------------------------------------------------- */

    let uniqueId = `CIITM/${course}/${otp}`;
    console.log(uniqueId);

    /* -------------------------------------------------------------------------- */
    /*                         Create a new student record                                         */
    /* -------------------------------------------------------------------------- */

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


    if(newStudent){
        res.json(newStudent)
    }


  } catch (error) {
    console.error(error.message);
    res.status(500).json({
        message: error.message,
        error: true,
    });
  }
};

export const StudentDocument_Upload = () => {};

export const StudentFee_Paid = () => {};
