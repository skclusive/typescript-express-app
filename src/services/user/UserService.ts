import { injectable } from "inversify";
import { IUser } from "./user";
import { IUserService } from "./service";

@injectable()
export default class UserService implements IUserService {
  private userStorage: IUser[] = [
    {
      email: "lorem@ipsum.com",
      name: "Lorem"
    },
    {
      email: "doloe@sit.com",
      name: "Dolor"
    }
  ];

  public getUsers(): IUser[] {
    return this.userStorage;
  }

  public getUser(id: string): IUser | undefined {
    return this.userStorage.find(user => user.name === id);
  }

  public newUser(user: IUser): IUser {
    this.userStorage.push(user);
    return user;
  }

  public updateUser(id: string, user: IUser): IUser {
    this.userStorage.map((entry, index) => {
      if (entry.name === id) {
        this.userStorage[index] = user;
      }
    });

    return user;
  }

  public deleteUser(id: string): string {
    let updatedUser: IUser[] = [];
    this.userStorage.map(user => {
      if (user.name !== id) {
        updatedUser.push(user);
      }
    });

    this.userStorage = updatedUser;
    return id;
  }
}
