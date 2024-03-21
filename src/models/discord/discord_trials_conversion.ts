import { model, Schema } from "mongoose";

import { BaseSchema } from "@helpers";

import type { IDiscordTrialsConversion } from "@types";

const DiscordTrialsConversionSchema = new Schema<IDiscordTrialsConversion>({
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
	signups: {
		type: Number
	},
	renewals: {
		type: Number
	},
	upgrades: {
		type: Number
	},
	churn: {
		type: Number
	}
}).add(BaseSchema);

export const DiscordTrialsConversion = model<IDiscordTrialsConversion>(
	"discord_trials_conversion",
	DiscordTrialsConversionSchema
);
