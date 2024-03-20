import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordGuildNewFollowers } from "@types";

const DiscordGuildNewFollowersSchema = new Schema<IDiscordGuildNewFollowers>({
	Week_Start: {
		type: String
	},
	new_followers: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordGuildNewFollowers = model<IDiscordGuildNewFollowers>(
	"discord_guild_new_followers",
	DiscordGuildNewFollowersSchema
);
