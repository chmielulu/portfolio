import type { NextApiHandler } from "next";
import sharp from "sharp";
import path from "path";
import { v4 as uuid } from "uuid";
import mongoose from "mongoose";
import { Form } from "../../models/Form";

const handler: NextApiHandler = async ({ body, method }, res) => {
  await mongoose.connect(process.env.MONGODB_URI);

  if (method !== "POST") return;
  const parsedBody = JSON.parse(body) as {
    name: string;
    mail: string;
    message: string;
    subject: string;
    file?: string;
  };

  let fileName;

  if (parsedBody.file) {
    const buffer = Buffer.from(
      parsedBody.file.split(";base64,").pop() || "",
      "base64"
    );
    const image = sharp(buffer);

    try {
      await image.stats();
    } catch (e) {
      return res.status(400).json({ err: "Invalid image" });
    }

    const metadata = await image.metadata();

    if (
      metadata.format !== "jpg" &&
      metadata.format !== "jpeg" &&
      metadata.format !== "png" &&
      metadata.format !== "webp" &&
      metadata.format !== "gif"
    ) {
      return res.status(400).json({ err: "Invalid image" });
    }

    try {
      fileName = `${uuid()}.jpg`;
      await image
        .jpeg({ quality: 100 })
        .toFile(path.join(process.cwd(), "images_from_form", fileName));
    } catch (e) {
      console.log(e);
      return res.status(500).json({ err: "Something went wrond" });
    }
  }

  const formItem = new Form();
  formItem.name = parsedBody.name;
  formItem.mail = parsedBody.mail;
  formItem.message = parsedBody.message;
  formItem.subject = parsedBody.subject;
  formItem.file = fileName;
  formItem.date = new Date();

  await formItem.save();

  res.status(200).json({ data: "Success" });
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default handler;
