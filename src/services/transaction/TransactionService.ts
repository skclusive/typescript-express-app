import { injectable } from "inversify";
import { ITransaction } from "./transaction";
import { ITransactionService } from "./service";

import { transactions } from "./data";

import { delay } from "../../utils";

@injectable()
export default class TransactionService implements ITransactionService {
  public async getTransactions(): Promise<Array<ITransaction>> {
    await delay(2000);
    return transactions;
  }
}
