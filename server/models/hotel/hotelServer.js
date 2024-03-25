const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HotelServer = new Schema({
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
  minimum_nights: String,
  maximum_nights: String,
  cancellation_policy: String,
  accommodates: Number,
  bedrooms: Number,
  beds: Number,
  number_of_reviews: Number,
  bathrooms: Number,
  amenities: [String],
  price: Number,
  security_deposit: Number,
  cleaning_fee: Number,
  extra_people: Number,
  guests_included: Number,
  image: {
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
  review: {
    data: Date,
    reviewer_name: String,
    comment: String,
  },
})

