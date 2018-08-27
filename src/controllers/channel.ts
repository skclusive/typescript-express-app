import { controller, httpGet } from "inversify-express-utils";
import { inject } from "inversify";
import { IChannel, IChannelService, Services } from "../services";

@controller("/api/v1/channel")
export class ChannelController {
  constructor(
    @inject(Services.Channel) private readonly channelService: IChannelService
  ) {}

  @httpGet("/")
  public async getChannels(): Promise<IChannel[]> {
    return await this.channelService.getChannels();
  }
}
