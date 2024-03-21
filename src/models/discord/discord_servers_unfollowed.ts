import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordServersUnfollowed } from "@types";

const DiscordServersUnfollowedSchema = new Schema<IDiscordServersUnfollowed>({
	Week_Start: {
		type: String
	},
	unfollows: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordServersUnfollowed = model<IDiscordServersUnfollowed>(
	"discord_servers_unfollowed",
	DiscordServersUnfollowedSchema
);
