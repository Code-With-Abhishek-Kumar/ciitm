import { Schema , model } from "mongoose";

// s -------> Student

const studentPersonalSchema = new Schema({

    sAuthentication_Id: {
        type: Schema.ObjectId,
        ref: 'StudentAuthentication'
    },

    sName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },


    sMobileNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    sParentNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    sFatherName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },

    sMotherName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },


    sUniqueId:{
        type:String,
        unique: true,
        required: true,
        trim: true,
    },

    sTenthDivision: {
        type: String,
        required: true,

        lowercase: true,
        trim: true,
    },

    sTenthBoard: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },

    sTwelveBoard: {
        type: String,
        required: true,
  
        lowercase: true,
        trim: true,
    },

    sTwelveDivision: {
        type: String,
        required: true,
        lowercase: true,

        trim: true,
    },

    sCourse:{
        type: String,
        require: true,
        lowercase: true,
    },
  // Personal Fee detail
  

    sAmountPaid: {
        type: Number,
        required: true,
        default: 0
    },

    sDiscount:{
        type: Number,
        default: 0,
    
    },

    sTotalFee: {
        type: Number,
        required: true,
    },
   
    sDueFee: {
        type: Number,
        required: true,
        default: function () {
            return this.totalFee - this.amountPaid - this.discount;
        }
    },

}, {
    timestamps: true,
});






export  default model('studentPersonal', studentPersonalSchema);
