import express from "express";
import Platform from "../Model/Platform.js";
const router = express.Router();

// Get Platform Details
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const platform = await Platform.findOne({ userId });
    res.json(platform || {});
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Update Platform Details
router.post("/update", async (req, res) => {
  const { userId, github, leetcode, gfg, codechef, codeforces } = req.body;
  try {
    let platform = await Platform.findOne({ userId });
    if (!platform) {
      platform = new Platform({ userId });
    }

    platform.github = github || platform.github;
    platform.leetcode = leetcode || platform.leetcode;
    platform.gfg = gfg || platform.gfg;
    platform.codechef = codechef || platform.codechef;
    platform.codeforces = codeforces || platform.codeforces;

    await platform.save();
    res.json({ message: "Updated successfully", platform });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
