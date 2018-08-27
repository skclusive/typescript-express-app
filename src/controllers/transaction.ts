import { controller, httpGet } from "inversify-express-utils";
import { inject } from "inversify";
import { ITransaction, ITransactionService, Services } from "../services";

@controller("/api/v1/transaction")
export class TransactionController {
  constructor(
    @inject(Services.Transaction)
    private readonly transactionService: ITransactionService
  ) {}

  @httpGet("/")
  public async getTransactions(): Promise<ITransaction[]> {
    return await this.transactionService.getTransactions();
  }
}
