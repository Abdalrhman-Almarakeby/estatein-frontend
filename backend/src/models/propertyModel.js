const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const propertySchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     location: {
//       type: String,
//       required: true,
//     },
//     bedrooms: {
//       type: Number,
//       required: true,
//     },
//     bathrooms: {
//       type: Number,
//       required: true,
//     },
//     area: {
//       type: Number,
//       required: true,
//     },
//     images: {
//       type: [String],
//       required: true,
//       min: 5,
//       max: 10,
//     },
//     keyFeatures: {
//       type: [String],
//       min: 5,
//       max: 10,
//     },
//     price: {
//       listingPrice: {
//         type: Number,
//         required: true,
//       },
//       fees: {
//         transferTax: {
//           type: Number,
//           required: true,
//         },
//         legalFees: {
//           type: Number,
//           required: true,
//         },
//         homeInspection: {
//           type: Number,
//           required: true,
//         },
//         propertyInsurance: {
//           type: Number,
//           required: true,
//         },
//         mortgageFess: {
//           type: Number,
//           required: true,
//         },
//       },
//     },
//   },
//   { timestamps: true }
// );

const propertySchema = new Schema({ img: [String] });

const PropertyModel = mongoose.model("property", propertySchema);

module.exports = PropertyModel;
