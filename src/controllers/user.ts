import {
  controller,
  httpGet,
  httpPost,
  httpPut,
  httpDelete,
  requestParam
} from "inversify-express-utils";
import {inject} from "inversify";
import {IUser, UserService} from "../services/user";
import {Request} from "express";
import TYPES from "../constants/types";

@controller("/api/v1/user")
export class UserController {
  constructor(@inject(TYPES.UserService) private userService: UserService) {}

  @httpGet("/")
  public getUsers(): IUser[] {
    return this.userService.getUsers();
  }

  @httpGet("/:id")
  public getUser(@requestParam("id") id: string): IUser | undefined {
    return this.userService.getUser(id);
  }

  @httpPost("/")
  public newUser(request: Request): IUser {
    return this.userService.newUser(request.body);
  }

  @httpPut("/:id")
  public updateUser(@requestParam("id") id: string, request: Request): IUser {
    return this.userService.updateUser(id, request.body);
  }

  @httpDelete("/:id")
  public deleteUser(request: Request): string {
    return this.userService.deleteUser(request.params.id);
  }
}
