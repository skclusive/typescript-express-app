import { IBlock } from "./block";

export interface IBlockService {
  getBlocks(): Array<IBlock>;
  getBlock(hash: string): IBlock;
}
