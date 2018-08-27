import { interfaces } from "inversify";

import { Services } from "../services";
import { IChannelService, ChannelService } from "../services";
import { IBlockService, BlockService } from "../services";
import { IUserService, UserService } from "../services";
import { ITransactionService, TransactionService } from "../services";

export default function configure(
  container: interfaces.Container
): interfaces.Container {
  container.bind<IChannelService>(Services.Channel).to(ChannelService);
  container.bind<IBlockService>(Services.Block).to(BlockService);
  container.bind<IUserService>(Services.User).to(UserService);
  container
    .bind<ITransactionService>(Services.Transaction)
    .to(TransactionService);
  return container;
}
