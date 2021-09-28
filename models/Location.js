const { Decimal128 } = require("mongoose");
const { Decimal128 } = require("mongoose");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const LocationSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [300, "max 300 chars are allowed for the name"],
  },

  address: {
    type: String,
    required: [true, "Please add an address"],
    maxlength: [300, "max 300 chars are allowed for the address"],
  },

  website: {
    type: String,
    maxlength: [300, "max 300 chars are allowed for the website"],
  },

  phone: {
    type: Number,
    maxlength: [20, "max 20 chars are allowed for phone"],
  },

  lat: {
    type: Decimal128,
    required: [true, "Please add lat"],
  },

  long: {
    type: Decimal128,
    required: [true, "Please add long"],
  },

  type: {
    type: Schema.ObjectId,
    ref: "LocationType",
    required: [true, "Please add the type of the location"],
  },
});

module.exports = mongoose.model("Location", LocationSchema, "locations");
