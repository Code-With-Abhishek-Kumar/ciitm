import mongoose from "mongoose";
import crypto from "node:crypto";
import otpGenerator from "otp-generation";
import StudentSchema from "../models/student_Personal.model.js";

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

    let handleRequiredField = () => {
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
        return res.status(400).json({
          message: "All fields are required",
          error: true,
        });
      }
    };

    let Create_newStudent = async () => {
      const GenerateUnique_number = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
      });
      console.log("Generated OTP:", otp);

      const uniqueId = `CIITM/${course}/${GenerateUnique_number}`;
      console.log("Generated Unique ID:", uniqueId);

      const newStudent = await StudentSchema.create({
        sName: name,
        sMobileNumber: mobileNumber,
        sParentNumber: parentNumber,
        sFatherName: fatherName,
        sMotherName: motherName,
        sUniqueId: uniqueId,
        sTenthDivision: tenthDivision,
        sTenthBoard: tenthBoard,
        sTwelveBoard: twelveBoard,
        sTwelveDivision: twelveDivision,
        sCourse: course,
        sAmountPaid: amountPaid,
        sDiscount: discount,
        sTotalFee: totalFee,
      });

      if (newStudent) {
        res.status(201).json(newStudent);
      } else {
        res.status(500).json({
          message: "Failed to create student record",
          error: true,
        });
      }
    };

    handleRequiredField();
    Create_newStudent();
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      message: error.message,
      error: true,
    });
  }
};

export const Handle_StudentDocument_Upload = () => {};

export const Handle_StudentFee_Paid = () => {};
