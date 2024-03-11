import { Schema, model } from "mongoose";
import Joi from "joi";

const propertySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },
    images: {
      type: [String],
      required: true,
      min: 5,
      max: 10,
    },
    keyFeatures: {
      type: [String],
      require: true,
      min: 5,
      max: 10,
    },
    price: {
      listingPrice: {
        type: Number,
        required: true,
      },
      fees: {
        transferTax: {
          type: Number,
          required: true,
        },
        legalFees: {
          type: Number,
          required: true,
        },
        homeInspection: {
          type: Number,
          required: true,
        },
        propertyInsurance: {
          type: Number,
          required: true,
        },
        mortgageFees: {
          type: Number,
          required: true,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

export const JoiSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  location: Joi.string().required(),
  bedrooms: Joi.number().required(),
  bathrooms: Joi.number().required(),
  area: Joi.number().required(),
  images: Joi.array().items(Joi.string()).min(5).max(10).required(),
  keyFeatures: Joi.array().items(Joi.string()).min(5).max(10).required(),
  price: Joi.object({
    listingPrice: Joi.number().required(),
    fees: Joi.object({
      transferTax: Joi.number().required(),
      legalFees: Joi.number().required(),
      homeInspection: Joi.number().required(),
      propertyInsurance: Joi.number().required(),
      mortgageFees: Joi.number().required(),
    }),
  }),
}).required();

export const PropertyModel = model("Property", propertySchema);
