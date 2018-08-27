export * from "./block";
export * from "./channel";
export * from "./transaction";
export * from "./user";

export abstract class Services {
  public static Block = Symbol("block");
  public static Channel = Symbol("channel");
  public static Transaction = Symbol("transaction");
  public static User = Symbol("user");
}
