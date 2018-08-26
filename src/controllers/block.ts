import { controller, httpGet, requestParam } from "inversify-express-utils";
import { inject } from "inversify";
import { IBlock, IBlockService } from "../services/block";
import TYPES from "../constants/types";

@controller("/api/v1/block")
export class BlockController {
  constructor(
    @inject(TYPES.BlockService) private blockService: IBlockService
  ) {}

  @httpGet("/")
  public getBlocks(): IBlock[] {
    return this.blockService.getBlocks();
  }

  @httpGet("/:id")
  public getBlock(@requestParam("id") id: string): IBlock | undefined {
    return this.blockService.getBlock(id);
  }
}
