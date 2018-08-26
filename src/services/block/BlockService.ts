import { injectable } from "inversify";
import { IBlock } from "./block";
import { IBlockService } from "./service";

import { blocks } from "./data";

@injectable()
export default class BlockService implements IBlockService {
  public getBlock(hash: string): IBlock {
    return blocks.find(block => block.hash === hash)!;
  }

  public getBlocks(): Array<IBlock> {
    return blocks;
  }
}
