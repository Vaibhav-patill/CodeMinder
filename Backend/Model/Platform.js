import mongoose from "mongoose";

const PlatformSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  github: { type: String, default: "" },
  leetcode: { type: String, default: "" },
  gfg: { type: String, default: "" },
  codechef: { type: String, default: "" },
  codeforces: { type: String, default: "" },
  verified: { type: Boolean, default: false },
});

const Platform = mongoose.model("Platform", PlatformSchema);
export default Platform;
