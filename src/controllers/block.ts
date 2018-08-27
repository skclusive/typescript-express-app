import { controller, httpGet, requestParam } from "inversify-express-utils";
import { inject } from "inversify";
import { IBlock, IBlockService, Services } from "../services";

@controller("/api/v1/block")
export class BlockController {
  constructor(
    @inject(Services.Block) private readonly blockService: IBlockService
  ) {}

  @httpGet("/")
  public async getBlocks(): Promise<IBlock[]> {
    return await this.blockService.getBlocks();
  }

  @httpGet("/:id")
  public async getBlock(
    @requestParam("id") id: string
  ): Promise<IBlock | undefined> {
    return await this.blockService.getBlock(id);
  }
}
