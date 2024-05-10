import express from "express";
import {
  isAdmin,
  requireSignIn
} from "../middlewares/authMiddleware.js";
import {
  ShopController,
  createShopController,
  deleteShopController,
  singleShopController,
  updateShopController,
} from "../controllers/ShopController.js";

const router = express.Router();

// Create Shop
router.post("/create-Shop", requireSignIn, isAdmin, createShopController);

// Update Shop
router.put("/update-Shop/:id", requireSignIn, isAdmin, updateShopController);

// Get all Shops
router.get("/get-Shop", ShopController);

// Get single Shop
router.get("/single-Shop/:slug", singleShopController);

// Delete Shop
router.delete("/delete-Shop/:id", requireSignIn, isAdmin, deleteShopController);

export default router;
