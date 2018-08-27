import { injectable } from "inversify";
import { IBlock } from "./block";
import { IBlockService } from "./service";

import { blocks } from "./data";

import { delay } from "../../utils";

@injectable()
export default class BlockService implements IBlockService {
  public async getBlock(hash: string): Promise<IBlock> {
    await delay(1500);
    return blocks.find(block => block.hash === hash)!;
  }

  public async getBlocks(): Promise<Array<IBlock>> {
    await delay(1500);
    return blocks;
  }
}
