import { IUser } from "./user";

export interface IUserService {
  getUsers(): IUser[];
  getUser(id: string): IUser | undefined;
  newUser(user: IUser): IUser;
  updateUser(id: string, user: IUser): IUser;
  deleteUser(id: string): string;
}
