import express from "express";
import http from "http";
import https from "https";
import formHandler from "./handlers/form";
import imageHandler from "./handlers/image";
import fs from "fs/promises";
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

  app.use(express.json());
  app.use(cors());

  if (process.env.NODE_ENV === "production") {
    app.enable("trust proxy");
    app.use((req, res, next) => {
      if (!req.secure)
        return res.redirect(`https://${req.headers.host}${req.url}`);

      next();
    });
  }

  app.post("/form", formHandler);
  app.get("/image", imageHandler);

  const htttPort = process.env.NODE_ENV === "production" ? 80 : 3005;
  const httpServer = http.createServer(app);

  httpServer.listen(htttPort, () => {
    console.log(`HTTP Server listening on http://localhost:${htttPort}`);
  });

  if (process.env.NODE_ENV === "production") {
    if (
      !process.env.SSL_CERTIFICATE ||
      !process.env.SSL_PRIVATE_KEY ||
      !process.env.SSL_CHAIN
    ) {
      console.error(
        "In production you have to declare SSL_PRIVATE_KEY, SSL_CERTIFICATE, SSL_CHAIN in .env file!"
      );
      return process.exit(1);
    }

    const privateKey = await fs.readFile(process.env.SSL_PRIVATE_KEY);
    const certificate = await fs.readFile(process.env.SSL_CERTIFICATE);
    const chain = await fs.readFile(process.env.SSL_CHAIN);

    const credentials = {
      key: privateKey,
      cert: certificate,
      ca: chain,
    };

    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen(443, () => {
      console.log(`HTTPS Server listening on https://localhost:443`);
    });
  }
}

main();
