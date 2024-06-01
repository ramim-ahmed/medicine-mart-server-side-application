const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    photo: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["USER", "SELLER", "ADMIN"],
      default: "USER",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
