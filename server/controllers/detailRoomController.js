
const HotelDetailModel = require("../models/hotel/hotelDetail");

exports.detailRoom_check_get = async (req, res, next) => {
  try {
    const filter = {
      _id:1,
      name: 1,
      summary: 1,
      space: 1,
      description: 1,
      neighborhood_overview: 1,
      notes: 1,
      transit: 1,
      access: 1,
      interaction: 1,
      house_rules: 1,
      property_type: 1,
      room_type: 1,
      bed_type: 1,
      cancellation_policy: 1,
      accommodates: 1,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      amenities: 1,
      price: 1,
      images: {
        picture_url: 1,
      },
      address: {
        street: 1,
        country: 1,
      },
      review_scores: {
        review_scores_accuracy:1,
        review_scores_cleanliness:1,
        review_scores_checkin:1,
        review_scores_communication:1,
        review_scores_location:1,
        review_scores_rating:1,
      },
      reviews: 1,
    };
    const _id = req.params.id;
    const result = await HotelDetailModel.find({_id:_id},filter).exec();
    res.json(result);

  } catch (err) {
    res.status(500).json({ error: err, msg: "无法find" })
  }
}



