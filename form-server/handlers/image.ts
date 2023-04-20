import fs from "fs/promises";
import path from "path";
import type { Handler } from "express";
import dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const handler: Handler = async (req, res) => {
  if (req.method !== "GET" || req.query.auth !== process.env.AUTH_TOKEN)
    return res
      .status(403)
      .json({ err: "You don't have permissions to do it." });

  let image;

  try {
    if (!req.query.id) {
      throw "You have to enter id";
    }

    const filePath = path.join(
      process.cwd(),
      "images_from_form",
      req.query.id as string
    );

    image = await fs.readFile(filePath);
    res.setHeader("Content-Type", "image/jpeg");
    res.status(200).send(image);
  } catch (e) {
    res.setHeader("Content-Type", "text/json");

    if (typeof e === "object") {
      // @ts-ignore
      return res.status(400).json({ err: e?.code });
    }

    return res.status(400).json({ err: e });
  }
};

export default handler;
