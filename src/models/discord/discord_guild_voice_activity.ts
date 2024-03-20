import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordGuildVoiceActivity } from "@types";

const DiscordGuildVoiceActivitySchema = new Schema<IDiscordGuildVoiceActivity>({
	Week_Start: {
		type: String
	},
	speaking_minutes: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordGuildVoiceActivity = model<IDiscordGuildVoiceActivity>(
	"discord_guild_voice_activity",
	DiscordGuildVoiceActivitySchema
);
