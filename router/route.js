import express from "express";
import { getAnalytics, addAnalytics, getMonthlyAnalytics } from "../controllers/analyticsController.js";
import Analytics from "../models/schema.js"

const router = express.Router();

router.get("/", getAnalytics);
router.post("/", addAnalytics);
router.get("/monthly", getMonthlyAnalytics);

// ✅ Correct delete route
router.delete("/", async (req, res) => {
  try {
    await Analytics.deleteMany({});
    res.json({ message: "All analytics deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;