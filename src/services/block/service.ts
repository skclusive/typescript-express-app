import { IBlock } from "./block";

export interface IBlockService {
  getBlocks(): Promise<Array<IBlock>>;
  getBlock(hash: string): Promise<IBlock>;
}
