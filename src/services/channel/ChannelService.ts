import { injectable } from "inversify";
import { IChannel } from "./channel";
import { IChannelService } from "./service";

import { channels } from "./data";

import { delay } from "../../utils";

@injectable()
export default class ChannelService implements IChannelService {
  public async getChannels(): Promise<Array<IChannel>> {
    await delay(2000);
    return channels;
  }
}
