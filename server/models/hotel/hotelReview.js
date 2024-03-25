//server-->models-->hotel-->hotelReview

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HotelReviewSchema = new Schema({
  _id: String,
  name: String,
  property_type: String,
  number_of_reviews: Number,
  amenities: [String],
  price: Number,
  images: {
    picture_url: String,
  },
  address: {
    country: String,
  },
  review_scores: {
    review_scores_rating: Number,
  }
})
const HotelReviewModel = mongoose.model("airbnb", HotelReviewSchema, "airbnb");

module.exports = HotelReviewModel;