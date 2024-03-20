import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordGuildCommunicators } from "@types";

const DiscordGuildCommunicatorsSchema = new Schema<IDiscordGuildCommunicators>({
	Week_Start: {
		type: String
	},
	Visitors: {
		type: Number
	},
	Pct_Communicated: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordGuildCommunicators = model<IDiscordGuildCommunicators>(
	"discord_guild_communicators",
	DiscordGuildCommunicatorsSchema
);
