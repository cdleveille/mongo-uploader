import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordPopularTextChannels } from "@types";

const DiscordPopularTextChannelsSchema = new Schema<IDiscordPopularTextChannels>({
	Week_Start: {
		type: String
	},
	channel_name: {
		type: String
	},
	channel_id: {
		type: String
	},
	readers: {
		type: Number
	},
	chatters: {
		type: Number
	},
	messages: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordPopularTextChannels = model<IDiscordPopularTextChannels>(
	"discord_popular_text_channels",
	DiscordPopularTextChannelsSchema
);
