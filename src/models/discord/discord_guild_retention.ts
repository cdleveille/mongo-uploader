import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordGuildRetention } from "@types";

const DiscordGuildRetentionSchema = new Schema<IDiscordGuildRetention>({
	Week_Start: {
		type: String
	},
	New_Members: {
		type: Number
	},
	Pct_Retained: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordGuildRetention = model<IDiscordGuildRetention>(
	"discord_guild_retention",
	DiscordGuildRetentionSchema
);
