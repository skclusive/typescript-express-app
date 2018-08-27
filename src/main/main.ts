// tslint:disable:no-console

import "reflect-metadata";

import { InversifyExpressServer } from "inversify-express-utils";
import { Container } from "inversify";

import config from "./express";
import configure from "./container";

import "../controllers";

export default async function main(): Promise<boolean> {
  // load everything needed to the Container
  const container = configure(new Container());

  // start the server
  const server = new InversifyExpressServer(container);

  server.setConfig(config);

  server.build().listen(4000);

  console.log("Server started on port 4000 :)");

  return true;
}
