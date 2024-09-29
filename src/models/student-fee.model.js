import mongoose from 'mongoose';
const { Schema } = mongoose;

const feeSchema = new Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StudentAuthentication', // Reference to the StudentPersonal model
      required: true,
    },

    orderId: {
      type: String,
      required: true,
      unique: true,
    },

    amountPaid: {
      type: Number,
      required: true,
      default: 0,
    },

    discount: {
      type: Number,
      default: 0,
    },

    totalFee: {
      type: Number,
      required: true,
      min: 0,
    },

    dueFee: {
      type: Number,
      required: true,
      default: function () {
        return Math.max(0, this.totalFee - this.amountPaid - this.discount);
      },
    },

    paymentDate: {
      type: Date,
      default: Date.now,
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: ['cash', 'credit_card', 'bank_transfer', 'online_payment'],
      required: true,
    },

    notes: {
      type: String,
      trim: true,
    },

    totalAmountPaid: {
      type: Number,
      default: 0,
    },

    totalAmountDue: {
      type: Number,
      default: 0,
    },

    paymentHistory: [
      {
        amount: {
          type: Number,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        method: {
          type: String,
          enum: ['cash', 'credit_card', 'bank_transfer', 'online_payment'],
        },
        notes: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Fee = mongoose.model('Fee', feeSchema);

export default Fee;
