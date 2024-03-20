import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordGuildTotalFollowers } from "@types";

const DiscordGuildTotalFollowersSchema = new Schema<IDiscordGuildTotalFollowers>({
	Week_Start: {
		type: String
	},
	new_followers: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordGuildTotalFollowers = model<IDiscordGuildTotalFollowers>(
	"discord_guild_total_followers",
	DiscordGuildTotalFollowersSchema
);
