// tslint:disable:no-console

import "reflect-metadata";
import {InversifyExpressServer} from "inversify-express-utils";
import {Container} from "inversify";
import * as bodyParser from "body-parser";
import TYPES from "../constants/types";
import {UserService} from "../services/user";
import "../controllers/home";
import "../controllers/user";

export default async function main(): Promise<boolean> {
  // load everything needed to the Container
  const container = new Container();
  container.bind<UserService>(TYPES.UserService).to(UserService);

  // start the server
  const server = new InversifyExpressServer(container);

  server.setConfig(app => {
    app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    app.use(bodyParser.json());
  });

  server.build().listen(4000);

  console.log("Server started on port 4000 :)");

  return true;
}
