const { Schema, model } = require("mongoose");
const orderSchema = new Schema(
  {
    transactionId: {
      type: String,
      required: true,
    },
    user: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    shippingInfo: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    products: [
      {
        email: {
          type: String,
          required: true,
        },
        seller: {
          name: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
          },
          photo: {
            type: String,
            required: true,
          },
        },
        productId: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        genericName: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        category: {
          type: Schema.Types.ObjectId,
          ref: "Category",
        },
        company: {
          type: Schema.Types.ObjectId,
          ref: "Company",
        },
        massUnit: {
          type: String,
          required: true,
        },
        unitPrice: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        discountPercentage: {
          type: Number,
          default: 0,
        },
      },
    ],
    grandTotal: {
      type: Number,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const Order = model("Order", orderSchema);

module.exports = Order;
