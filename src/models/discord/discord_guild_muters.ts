import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordGuildMuters } from "@types";

const DiscordGuildMutersSchema = new Schema<IDiscordGuildMuters>({
	Week_Start: {
		type: String
	},
	days_in_guild: {
		type: String
	},
	speaking_minutes: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordGuildMuters = model<IDiscordGuildMuters>("discord_guild_muters", DiscordGuildMutersSchema);
