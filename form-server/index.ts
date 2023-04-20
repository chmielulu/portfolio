import express from "express";
import formHandler from "./handlers/form";
import imageHandler from "./handlers/image";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";

dotenv.config({ path: path.join(process.cwd(), ".env") });

async function main() {
  const app = express();

  try {
    if (!process.env.MONGODB_URI)
      throw "You have to setup MONGODB_URI in .env file first.";

    await mongoose.connect(process.env.MONGODB_URI);
  } catch (e) {
    console.error(e);
    return process.exit(1);
  }

  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ limit: "10mb", extended: true }));
  app.use(cors());

  app.post("/form", formHandler);
  app.get("/image", imageHandler);

  const port = 3005;

  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

main();
