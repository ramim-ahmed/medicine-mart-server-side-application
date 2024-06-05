const { Schema, model } = require("mongoose");
const cartSchema = new Schema(
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
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const Cart = model("Cart", cartSchema);

module.exports = Cart;
