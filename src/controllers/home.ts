import {controller, httpGet} from "inversify-express-utils";

@controller("/api/v1/")
export class HomeController {
  @httpGet("/")
  public get(): string {
    return "Home sweet home";
  }
}
