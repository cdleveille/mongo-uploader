import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordSelectedWelcomeChannels } from "@types";

const DiscordSelectedWelcomeChannelsSchema = new Schema<IDiscordSelectedWelcomeChannels>({
	Week_Start: {
		type: String
	},
	option_selected: {
		type: String
	},
	channel_id: {
		type: String
	},
	pct_clicked: {
		type: Number
	},
	pct_sent_message: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordSelectedWelcomeChannels = model<IDiscordSelectedWelcomeChannels>(
	"discord_selected_welcome_channels",
	DiscordSelectedWelcomeChannelsSchema
);
