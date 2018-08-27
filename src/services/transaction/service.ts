import { ITransaction } from "./transaction";

export interface ITransactionService {
  getTransactions(): Promise<Array<ITransaction>>;
}
