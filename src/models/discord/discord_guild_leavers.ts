import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordGuildLeavers } from "@types";

const DiscordGuildLeaversSchema = new Schema<IDiscordGuildLeavers>({
	Week_Start: {
		type: String
	},
	Days_In_Guild: {
		type: String
	},
	Total_Membership: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordGuildLeavers = model<IDiscordGuildLeavers>("discord_guild_leavers", DiscordGuildLeaversSchema);
