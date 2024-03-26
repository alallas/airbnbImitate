
const HotelDetailModel = require("../models/hotel/hotelDetail");

exports.homeRoom_check_get = async (req, res, next) => {
  try {
    const filter = {
      _id:1,
      name:1,
      property_type:1,
      number_of_reviews:1,
      price:1,
      images:{
        picture_url:1,
      },
      address:{
        country:1,
      },
      review_scores:{
        review_scores_rating:1,
      }
    };
    const result = await HotelDetailModel.find({},filter).limit(100).exec();
    res.json(result);
    console.log(typeof result);

  } catch (err) {
    res.status(500).json({ error: err, msg: "无法find" })
  }
}







