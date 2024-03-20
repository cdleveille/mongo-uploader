import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordGuildActivation } from "@types";

const DiscordGuildActivationSchema = new Schema<IDiscordGuildActivation>({
	application_id: {
		type: String
	},
	Week_Start: {
		type: String
	},
	aggregation_interval: {
		type: Number
	},
	tier_id: {
		type: String
	},
	tier_name: {
		type: String
	},
	is_trial: {
		type: Boolean
	},
	payment_platform: {
		type: String
	}
}).add(BaseSchema);

export const DiscordGuildActivation = model<IDiscordGuildActivation>(
	"discord_guild_activation",
	DiscordGuildActivationSchema
);
