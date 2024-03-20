import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordGuildMessageActivity } from "@types";

const DiscordGuildMessageActivitySchema = new Schema<IDiscordGuildMessageActivity>({
	Week_Start: {
		type: String
	},
	Messages: {
		type: Number
	},
	Messages_Per_Communicator: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordGuildMessageActivity = model<IDiscordGuildMessageActivity>(
	"discord_guild_message_activity",
	DiscordGuildMessageActivitySchema
);
