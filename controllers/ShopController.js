import ShopModel from "../models/ShopModel.js";
import slugify from "slugify";

// Create Shop
export const createShopController = async (req, res) => {
  try {
    const { name, details } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existingShop = await ShopModel.findOne({ name });

    if (existingShop) {
      return res.status(200).send({
        success: true,
        message: "This Shop already exists",
      });
    }
    const shop = await new ShopModel({
      name,
      slug: slugify(name),
      details,
    }).save();
    res.status(201).send({
      success: true,
      message: "New Shop created",
      shop,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating Shop",
    });
  }
};

// Update Shop
export const updateShopController = async (req, res) => {
  try {
    const { name, details } = req.body;
    const { id } = req.params;

    const shop = await ShopModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name), details },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Shop Updated Successfully",
      shop,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Shop",
    });
  }
};

// Get all Shops
export const ShopController = async (req, res) => {
  try {
    const shops = await ShopModel.find({});
    res.status(200).send({
      success: true,
      message: "All Shops List",
      shops,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all Shops",
    });
  }
};

// Get single Shop
export const singleShopController = async (req, res) => {
  try {
    const shop = await ShopModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Get Single Shop Successfully",
      shop,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting single Shop",
    });
  }
};

// Delete Shop
export const deleteShopController = async (req, res) => {
  try {
    const { id } = req.params;
    await ShopModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Shop Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting Shop",
      error,
    });
  }
};
