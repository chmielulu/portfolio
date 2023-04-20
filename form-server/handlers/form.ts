import type { Handler, Request } from "express";
import sharp from "sharp";
import path from "path";
import { v4 as uuid } from "uuid";
import { Form } from "../models/Form";

const handler: Handler = async (
  {
    body,
    method,
  }: Request<
    any,
    any,
    {
      name?: string; // Required
      mail?: string; // Required
      message?: string; // Required
      subject?: string; // Required
      file?: string;
    }
  >,
  res
) => {
  if (method !== "POST") return;

  let fileName;

  if (!body.name || !body.mail || !body.message || !body.subject) {
    return res.status(400).json({ err: "Input all required params" });
  }

  if (body.file) {
    const buffer = Buffer.from(
      body.file.split(";base64,").pop() || "",
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
  formItem.name = body.name;
  formItem.mail = body.mail;
  formItem.message = body.message;
  formItem.subject = body.subject;
  formItem.file = fileName;
  formItem.date = new Date();

  await formItem.save();

  res.status(200).json({ data: "Success" });
};

export default handler;
