import * as express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";

export default function configure(app: express.Application): void {
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());
  app.use(cors());
}
