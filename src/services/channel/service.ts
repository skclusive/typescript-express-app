import { IChannel } from "./channel";

export interface IChannelService {
  getChannels(): Promise<Array<IChannel>>;
}
