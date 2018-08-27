import {
  controller,
  httpGet,
  httpPost,
  httpPut,
  httpDelete,
  requestBody,
  requestParam
} from "inversify-express-utils";
import { inject } from "inversify";
import { IUser, IUserService, Services } from "../services";

@controller("/api/v1/user")
export class UserController {
  constructor(
    @inject(Services.User) private readonly userService: IUserService
  ) {}

  @httpGet("/")
  public getUsers(): IUser[] {
    return this.userService.getUsers();
  }

  @httpGet("/:id")
  public getUser(@requestParam("id") id: string): IUser | undefined {
    return this.userService.getUser(id);
  }

  @httpPost("/")
  public newUser(@requestBody() user: IUser): IUser {
    return this.userService.newUser(user);
  }

  @httpPut("/:id")
  public updateUser(
    @requestParam("id") id: string,
    @requestBody() user: IUser
  ): IUser {
    return this.userService.updateUser(id, user);
  }

  @httpDelete("/:id")
  public deleteUser(@requestParam("id") id: string): string {
    return this.userService.deleteUser(id);
  }
}
