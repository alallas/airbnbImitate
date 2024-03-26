const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HotelDetailSchema = new Schema({
  _id: String,
  name: String,
  summary: String,
  space: String,
  description: String,
  neighborhood_overview: String,
  notes: String,
  transit: String,
  access: String,
  interaction: String,
  house_rules: String,
  property_type: String,
  room_type: String,
  bed_type: String,
  cancellation_policy: String,
  accommodates: Number,
  bedrooms: Number,
  beds: Number,
  bathrooms: Number,
  amenities: [String],
  price: Number,
  images: {
    picture_url: String,
  },
  address: {
    street: String,
    country: String,
  },
  review_scores: {
    review_scores_accuracy:Number,
    review_scores_cleanliness:Number,
    review_scores_checkin:Number,
    review_scores_communication:Number,
    review_scores_location:Number,
    review_scores_rating:Number,
  },
  reviews: [{}],
})

const HotelDetailModel = mongoose.model("airbnb", HotelDetailSchema, "airbnb");

module.exports = HotelDetailModel;


